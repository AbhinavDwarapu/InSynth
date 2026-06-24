import { Text, Flex, Box, Spacer } from "@chakra-ui/react";
import EffectSlider from "./ui/EffectSlider";

import { useState } from "react";
import PanelHeader from "./ui/PanelHeader";

export default function ADSREnvelope({ synth }) {
  const [attackVal, setAttackVal] = useState(30);
  const [decayVal, setDecayVal] = useState(30);
  const [sustainVal, setSustainVal] = useState(30);
  const [releaseVal, setReleaseVal] = useState(30);

  function getAttack(e) {
    synth.attack = (e / 100).toFixed(2);
    setAttackVal(e);
  }
  function getDecay(e) {
    synth.decay = (e / 100).toFixed(2);
    setDecayVal(e);
  }
  function getSustain(e) {
    synth.sustain = (e / 100).toFixed(2);
    setSustainVal(e);
  }
  function getRelease(e) {
    synth.release = (e / 100).toFixed(2);
    setReleaseVal(e);
  }

  const valBox = {
    fontFamily: "heading",
    color: "custom.900",
    bg: "custom.200",
    w: "20%",
    boxShadow: "inner",
    textAlign: "center",
    rounded: "md",
    py: 1,
  };

  return (
    <>
      <PanelHeader>ADSR Envelope</PanelHeader>
      <Box id="ADSREnvelope" flex="1" minH="0">
        <Flex direction="column" h="100%" pt={3} pb={4} px={2}>
          <Flex direction="row" textAlign="center" mb={2}>
            <Spacer />
            <Text color="custom.900" fontSize="sm" w="20%">
              Attack
            </Text>
            <Spacer />
            <Text color="custom.900" fontSize="sm" w="20%">
              Decay
            </Text>
            <Spacer />
            <Text color="custom.900" fontSize="sm" w="20%">
              Sus.
            </Text>
            <Spacer />
            <Text color="custom.900" fontSize="sm" w="20%">
              Rel.
            </Text>
            <Spacer />
          </Flex>
          <Flex direction="row" flexGrow="1" minH="0" pb={3}>
            <Spacer />
            <EffectSlider
              id="attackslider"
              colorPalette="custom"
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              w="20%"
              onChange={getAttack}
            />
            <Spacer />
            <EffectSlider
              colorPalette="custom"
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              w="20%"
              onChange={getDecay}
            />
            <Spacer />
            <EffectSlider
              colorPalette="custom"
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              w="20%"
              onChange={getSustain}
            />
            <Spacer />
            <EffectSlider
              colorPalette="custom"
              aria-label="slider-ex-3"
              defaultValue={30}
              orientation="vertical"
              w="20%"
              onChange={getRelease}
            />
            <Spacer />
          </Flex>
          <Flex direction="row" align="center">
            <Spacer />
            <Box id="attackval" {...valBox}>
              {attackVal}
            </Box>
            <Spacer />
            <Box id="decayval" {...valBox}>
              {decayVal}
            </Box>
            <Spacer />
            <Box id="sustainval" {...valBox}>
              {sustainVal}
            </Box>
            <Spacer />
            <Box id="releaseval" {...valBox}>
              {releaseVal}
            </Box>
            <Spacer />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
