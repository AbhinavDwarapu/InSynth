import {
  Grid,
  GridItem,
  Skeleton,
  useToast,
  Square,
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
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [notePlayed, setNote] = useState('N/A');
  const [pitchBend, setPitchBend] = useState(0);
  const [encoder, setEncoder] = useState('0.5');
  const [midiData, setMidiData] = useState('0,0,0');
  const [input, setInput] = useState('');
  const [channel, setChannel] = useState(1);
  const [synth, setSynth] = useState(null);
  const [inputList, setInputList] = useState([]);

  const [listenerFailed, setListenerFailed] = useState(false);

  useEffect(() => {
    setLoading(true);
    setDisabled(true);

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
        setListenerFailed(true);
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
        setDisabled(true);
        console.log('Listeners for data panel failed');
        return;
      }
      setSynth(WebSynth);
    });

    // Load skeleton while WebMidi initialises
    setLoading(false);
    setDisabled(false);

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
    <Square
      bg="custom.background"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      minW={840}
      minH={800}
    >
      <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={2}>
        <GridItem width={256} height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" border="2px" borderColor="custom.100">
          <DataPanel
            note={notePlayed}
            pitchbend={pitchBend}
            encoder={encoder}
            midiData={midiData}
            isDisabled={isDisabled}
          />
        </GridItem>
        <GridItem width={256} height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" border="2px" borderColor="custom.100">
          <SynthSelector synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem overflow="auto" height={785} bg="custom.50" boxShadow="2xl" rounded="2xl" rowSpan={4} colSpan={1} border="2px" borderColor="custom.100">
          <EffectRack
            synth={synth}
            isDisabled={isDisabled}
          />
        </GridItem>
        <GridItem width={256} height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" border="2px" borderColor="custom.100">
          <SetController
            inputList={inputList}
            input={input}
            channel={channel}
            setInput={setInput}
            setChannel={setChannel}
          />
        </GridItem>
        <GridItem width={256} height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" border="2px" borderColor="custom.100">
          <ADSREnvelope synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" colSpan={2} rowSpan={2} border="2px" borderColor="custom.100">
          <Graph synth={synth} isDisabled={isDisabled} />
        </GridItem>
      </Grid>
    </Square>

  );
}
