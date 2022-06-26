import {
  Grid,
  GridItem,
  Skeleton,
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

export default function SynthContainer() {
  const [isLoading, setLoading] = useState(false);
  const [notePlayed, setNote] = useState('N/A');
  const [pitchBend, setPitchBend] = useState(0);
  const [encoder, setEncoder] = useState(0.5);
  const [midiData, setMidiData] = useState('0,0,0');
  const [input, setInput] = useState('Arturia MiniLab mkII MIDI 1');
  const [channel, setChannel] = useState(1);
  const [synth, setSynth] = useState(null);
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    if (!WebMidi.enabled) {
      setLoading(true);
      WebMidi.enable().then(() => {
        const WebSynth = new Synthesizer(input.toString(), channel);
        const list = [];
        WebMidi.inputs.forEach((device) => {
          list.push(device.name);
        });
        setInputList(list);
        const controller = WebSynth.getController();

        controller.channels[WebSynth.getChannel()].addListener('noteon', (e) => {
          setNote(e.note.identifier);
          setMidiData(e.data.toString());
        });
        controller.channels[WebSynth.getChannel()].addListener('pitchbend', (e) => {
          setPitchBend(e.value);
          setMidiData(e.data.toString());
        });
        controller.channels[WebSynth.getChannel()].addListener('controlchange', (e) => {
          setEncoder(e.value);
          setMidiData(e.data.toString());
        });
        WebSynth.synthListeners();
        setSynth(WebSynth);
      });
    }
    setLoading(false);
    return function cleanup() {
      WebMidi.disable();
    };
  }, [input, channel]);

  if (isLoading) {
    <Skeleton>
      <div>hidden content</div>
    </Skeleton>;
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
