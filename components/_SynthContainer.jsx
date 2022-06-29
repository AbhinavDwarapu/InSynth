import {
  Grid,
  GridItem,
  Skeleton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { WebMidi } from 'webmidi';
import SynthSelector from './SynthSelector';
import DataPanel from './DataPanel';
import SetController from './SetController';
import Graph from './Graph';
import ADSREnvelope from './ADSREnvelope';
import EffectRack from './EffectRack/_EffectRack';

import Synthesizer from '../utils/synthesizer';

export default function SynthContainer({ listenerFailId }) {
  const lFailId = listenerFailId;
  const toast = useToast();
  const { onClose } = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const [notePlayed, setNote] = useState('N/A');
  const [pitchBend, setPitchBend] = useState(0);
  const [encoder, setEncoder] = useState(0.5);
  const [midiData, setMidiData] = useState('0,0,0');
  const [input, setInput] = useState('');
  const [channel, setChannel] = useState(1);
  const [synth, setSynth] = useState(null);
  const [inputList, setInputList] = useState([]);

  const [listenerFailed, setListenerFailed] = useState(false);

  useEffect(() => {
    setLoading(true);

    WebMidi.enable().then(() => {
      // Initialise Synthesizer

      const list = [];
      WebMidi.inputs.forEach((device) => {
        list.push(device.name);
      });
      setInputList(list);

      const controller = WebMidi.getInputByName(input);
      const WebSynth = new Synthesizer();
      WebSynth.controller = controller;
      // No controllers
      if (list.length === 0) {
        setEmptyList(true);
        console.log('No controllers detected');
        return;
      }

      if (controller === -1) {
        setListenerFailed(true);
        console.log('Synth did not detect controller/channel');
        return;
      }
      try {
        controller.channels[channel].addListener('noteon', (e) => {
          setNote(e.note.identifier);
          setMidiData(e.data.toString());
          WebSynth.triggerAttackCallback(e);
        });
        controller.channels[channel].addListener('pitchbend', (e) => {
          setPitchBend(e.value);
          setMidiData(e.data.toString());
          WebSynth.setDetuneCallback(e);
        });
        controller.channels[channel].addListener('noteoff', (e) => {
          WebSynth.triggerReleaseCallback(e);
        });
        controller.channels[channel].addListener('controlchange', (e) => {
          setEncoder(e.value);
          setMidiData(e.data.toString());
          WebSynth.setVolumeCallback(e);
        });
      } catch (e) {
        setListenerFailed(true);
        console.log('Listeners for data panel failed');
        return;
      }
      setSynth(WebSynth);
    });

    // Load skeleton while WebMidi initialises
    setLoading(false);

    // Create input list for set controller component
  }, [channel, input]);

  if (isLoading) {
    return (
      <Skeleton height="100vh">
        <div>hidden content</div>
      </Skeleton>
    );
  }

  if (listenerFailed) {
    if (lFailId.current) {
      toast.update(lFailId.current, {
        title: 'Select a Controller',
        description: 'Please set your controller and channel in the controller panel',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    } else {
      lFailId.current = toast({
        title: 'Select a Controller',
        description: 'Please set your controller and channel in the controller panel',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
    setListenerFailed(false);
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(4, 1fr)" gap={4} m={4}>
      <GridItem bg="tomato">
        <DataPanel
          note={notePlayed}
          pitchbend={pitchBend}
          encoder={encoder}
          midiData={midiData}
        />
      </GridItem>
      <GridItem bg="papayawhip">
        <SynthSelector
          synth={synth}
        />
      </GridItem>
      <GridItem bg="tomato" rowSpan={4} colSpan={1}>
        <EffectRack
          synth={synth}
        />
      </GridItem>
      <GridItem bg="papayawhip">
        <SetController
          inputList={inputList}
          input={input}
          channel={channel}
          setInput={setInput}
          setChannel={setChannel}
        />
      </GridItem>
      <GridItem bg="tomato">
        <ADSREnvelope
          synth={synth}
        />
      </GridItem>
      <GridItem bg="papayawhip" colSpan={2} rowSpan={2}>
        <Graph
          synth={synth}
          setSynth={setSynth}
        />
      </GridItem>

    </Grid>

  );
}
