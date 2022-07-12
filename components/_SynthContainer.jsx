/* eslint-disable no-console */

import {
  Grid,
  GridItem,
  Skeleton,
  useToast,
  Square,
  ScaleFade,
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
import mapKeyToNote from '../utils/keyboardMap';

export default function SynthContainer({ listenerFailId }) {
  const lFailId = listenerFailId;
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const [notePlayed, setNote] = useState('N/A');
  const [pitchBend, setPitchBend] = useState(0);
  const [encoder, setEncoder] = useState('0.5');
  const [midiData, setMidiData] = useState('0,0,0');
  const [input, setInput] = useState('');
  const [channel, setChannel] = useState(1);
  const [synth, setSynth] = useState(null);
  const [inputList, setInputList] = useState([]);

  const [runOnce, setRunOnce] = useState(false);

  const [listenerFailed, setListenerFailed] = useState(false);

  useEffect(() => {
    setLoading(true);
    const WebSynth = new Synthesizer();

    // For keyboard support
    if (runOnce) {
      document.addEventListener('keydown', (e) => {
        const name = mapKeyToNote(e.key);
        if (e.repeat || name === -1) return;
        WebSynth.triggerAttackReleaseCallback(name, '16n');
      });
      // document.addEventListener('keyup', (e) => {
      //   const name = mapKeyToNote(e.key);
      //   if (name === -1) return;
      //   WebSynth.triggerReleaseCallback(name);
      // });
    }
    setRunOnce(true);

    if (WebMidi.supported === undefined || WebMidi.supported === false) {
      console.log('Unsupported platform.');
      setLoading(false);
      setListenerFailed(true);
      setSynth(WebSynth);
      return;
    }

    WebMidi.enable().then(() => {
      // Initialise Synthesizer
      const list = [];
      WebMidi.inputs.forEach((device) => {
        list.push(device.name);
      });
      setInputList(list);

      const controller = WebMidi.getInputByName(input);
      WebSynth.controller = controller;
      // No controllers
      if (list.length === 0) {
        setListenerFailed(true);
        console.log('No controllers detected');
        setLoading(false);
        setSynth(WebSynth);
        return;
      }

      if (controller === -1) {
        setListenerFailed(true);
        console.log('Synth did not detect controller/channel');
        setLoading(false);
        setSynth(WebSynth);
        return;
      }
      try {
        controller.channels[channel].addListener('noteon', (e) => {
          setNote(e.note.identifier);
          setMidiData(e.data.toString());
          WebSynth.triggerAttackCallback(e.note.identifier, e.velocity);
        });
        controller.channels[channel].addListener('pitchbend', (e) => {
          setPitchBend(e.value);
          setMidiData(e.data.toString());
          WebSynth.setDetuneCallback(e);
        });
        controller.channels[channel].addListener('noteoff', (e) => {
          WebSynth.triggerReleaseCallback(e.note.identifier);
        });
        controller.channels[channel].addListener('controlchange', (e) => {
          setEncoder(e.value);
          setMidiData(e.data.toString());
          WebSynth.setVolumeCallback(e);
        });
      } catch (e) {
        setListenerFailed(true);
        console.log('Controller not found. (Listeners failed)');
        setLoading(false);
        setSynth(WebSynth);
        return;
      }
      setSynth(WebSynth);
    });

    // Load skeleton while WebMidi initialises
    setLoading(false);

    // Create input list for set controller component
  }, [channel, input, runOnce]);

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
        title: 'Select a Controller in the Set Controller Panel.',
        description: 'Ensure your browser supports Web Midi, you can still play using a keyboard! (Check the about page for more details.)',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    } else {
      lFailId.current = toast({
        title: 'Select a Controller in the Set Controller Panel.',
        description: 'Ensure your browser supports Web Midi, you can still play using a keyboard! (Check the about page for more details.)',
        status: 'success',
        duration: 5000,
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
      <Skeleton isLoaded={!isLoading} startColor="custom.50" endColor="custom.200">
        <ScaleFade initialScale={0.5} in bg="custom.background">
          <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={2}>
            <GridItem width={256} height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" border="2px" borderColor="custom.100">
              <DataPanel
                note={notePlayed}
                pitchbend={pitchBend}
                encoder={encoder}
                midiData={midiData}
              />
            </GridItem>
            <GridItem width={256} height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" border="2px" borderColor="custom.100">
              <SynthSelector synth={synth} />
            </GridItem>
            <GridItem overflow="auto" height={785} bg="custom.50" boxShadow="2xl" rounded="2xl" rowSpan={4} colSpan={1} border="2px" borderColor="custom.100">
              <EffectRack
                synth={synth}
                encoder={encoder}
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
              <ADSREnvelope synth={synth} />
            </GridItem>
            <GridItem height={256} bg="custom.50" boxShadow="2xl" rounded="2xl" colSpan={2} rowSpan={2} border="2px" borderColor="custom.100">
              <Graph synth={synth} />
            </GridItem>
          </Grid>
        </ScaleFade>
      </Skeleton>

    </Square>

  );
}
