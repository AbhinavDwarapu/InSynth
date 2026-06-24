/* eslint-disable no-console */

import { Box, Flex, Grid, Skeleton } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { toaster } from "./ui/toaster";
import { WebMidi } from "webmidi";
import SynthSelector from "./SynthSelector";
import DataPanel from "./DataPanel";
import SetController from "./SetController";
import Graph from "./Graph";
import ADSREnvelope from "./ADSREnvelope";
import EffectRack from "./EffectRack/_EffectRack";
import Panel from "./ui/Panel";
import Brandmark from "./Brandmark";
import { ColorModeToggle } from "./ui/color-mode";

import Synthesizer from "../utils/synthesizer";
import mapKeyToNote from "../utils/keyboardMap";

export default function SynthContainer({ listenerFailId }) {
  const lFailId = listenerFailId;
  const [isLoading, setLoading] = useState(false);
  const [notePlayed, setNote] = useState("N/A");
  const [pitchBend, setPitchBend] = useState(0);
  const [encoder, setEncoder] = useState("0.5");
  const [midiData, setMidiData] = useState("0,0,0");
  const [input, setInput] = useState("");
  const [channel, setChannel] = useState(1);
  const [synth, setSynth] = useState(null);
  const [inputList, setInputList] = useState([]);

  const [runOnce, setRunOnce] = useState(false);

  useEffect(() => {
    setLoading(true);
    const WebSynth = new Synthesizer();

    const showControllerToast = () => {
      const config = {
        title: "Select a Controller in the Set Controller Panel.",
        description:
          "Ensure your browser supports Web Midi, you can still play using a keyboard! (Check the about page for more details.)",
        type: "info",
        duration: 5000,
        closable: true,
      };
      if (lFailId.current) {
        toaster.update(lFailId.current, config);
      } else {
        lFailId.current = toaster.create(config);
      }
    };

    // For keyboard support
    if (runOnce) {
      document.addEventListener("keydown", (e) => {
        const name = mapKeyToNote(e.key);
        if (e.repeat || name === -1) return;
        WebSynth.triggerAttackReleaseCallback(name, "16n");
      });
      // document.addEventListener('keyup', (e) => {
      //   const name = mapKeyToNote(e.key);
      //   if (name === -1) return;
      //   WebSynth.triggerReleaseCallback(name);
      // });
    }
    setRunOnce(true);

    if (WebMidi.supported === undefined || WebMidi.supported === false) {
      console.log("Unsupported platform.");
      setLoading(false);
      showControllerToast();
      setSynth(WebSynth);
      return;
    }

    WebMidi.enable()
      .then(() => {
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
          showControllerToast();
          console.log("No controllers detected");
          setLoading(false);
          setSynth(WebSynth);
          return;
        }

        if (controller === -1) {
          showControllerToast();
          console.log("Synth did not detect controller/channel");
          setLoading(false);
          setSynth(WebSynth);
          return;
        }
        try {
          controller.channels[channel].addListener("noteon", (e) => {
            setNote(e.note.identifier);
            setMidiData(e.data.toString());
            WebSynth.triggerAttackCallback(e.note.identifier, e.velocity);
          });
          controller.channels[channel].addListener("pitchbend", (e) => {
            setPitchBend(e.value);
            setMidiData(e.data.toString());
            WebSynth.setDetuneCallback(e);
          });
          controller.channels[channel].addListener("noteoff", (e) => {
            WebSynth.triggerReleaseCallback(e.note.identifier);
          });
          controller.channels[channel].addListener("controlchange", (e) => {
            setEncoder(e.value);
            setMidiData(e.data.toString());
            WebSynth.setVolumeCallback(e);
          });
        } catch (e) {
          showControllerToast();
          console.log("Controller not found. (Listeners failed)");
          setLoading(false);
          setSynth(WebSynth);
          return;
        }
        setSynth(WebSynth);
      })
      .catch((err) => {
        console.log("Web Midi could not be enabled.", err);
        showControllerToast();
        setLoading(false);
        setSynth(WebSynth);
      });

    // Load skeleton while WebMidi initialises
    setLoading(false);

    // Create input list for set controller component
  }, [channel, input, runOnce, lFailId]);

  if (isLoading) {
    return (
      <Skeleton height="100vh">
        <div>hidden content</div>
      </Skeleton>
    );
  }

  return (
    <Box
      bg="custom.background"
      minH="100vh"
      minW={840}
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={10}
    >
      <Skeleton loading={!!isLoading}>
        <Flex direction="column" align="center" gap={4}>
          <Flex w="788px" align="center" justify="space-between" px={1}>
            <Brandmark />
            <ColorModeToggle />
          </Flex>
          <Grid
            templateColumns="repeat(2, 244px) 268px"
            templateRows="236px 236px 196px"
            gap={4}
          >
          <Panel gridColumn="1" gridRow="1">
            <DataPanel
              note={notePlayed}
              pitchbend={pitchBend}
              encoder={encoder}
              midiData={midiData}
            />
          </Panel>
          <Panel gridColumn="2" gridRow="1">
            <SynthSelector synth={synth} />
          </Panel>
          <Panel gridColumn="3" gridRow="1 / span 3">
            <EffectRack synth={synth} encoder={encoder} />
          </Panel>
          <Panel gridColumn="1" gridRow="2">
            <SetController
              inputList={inputList}
              input={input}
              channel={channel}
              setInput={setInput}
              setChannel={setChannel}
            />
          </Panel>
          <Panel gridColumn="2" gridRow="2">
            <ADSREnvelope synth={synth} />
          </Panel>
          <Panel gridColumn="1 / span 2" gridRow="3">
            <Graph synth={synth} />
          </Panel>
          </Grid>
        </Flex>
      </Skeleton>
    </Box>
  );
}
