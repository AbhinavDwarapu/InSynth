import { Box, VStack } from "@chakra-ui/react";
import PanelHeader from "../ui/PanelHeader";
import BitCrusher from "./BitCrusher";
import Chorus from "./Chorus";
import Distortion from "./Distortion";
import Reverb from "./Reverb";
import Phaser from "./Phaser";
import Chebyshev from "./Chebyshev";
import PingPongDelay from "./PingPongDelay";
import Tremolo from "./Tremolo";
import Vibrato from "./Vibrato";
import AutoWah from "./AutoWah";
import Panner3D from "./Panner3D";
import Volume from "./Volume";

export default function EffectRack({ synth, encoder }) {
  return (
    <>
      {/* Floating island: only the pill is opaque, so effects scroll behind it. */}
      <PanelHeader
        position="absolute"
        top="0"
        left="0"
        right="0"
        mx="auto"
        w="fit-content"
        zIndex={3}
      >
        Effect Rack
      </PanelHeader>
      <Box flex="1" minH="0" overflowY="auto">
        <VStack align="stretch" gap="20px" pt="48px" pb={4}>
          <Box>
            <Volume synth={synth} encoder={encoder} />
          </Box>
          <Box>
            <AutoWah synth={synth} />
          </Box>
          <Box>
            <BitCrusher synth={synth} />
          </Box>
          <Box>
            <Chebyshev synth={synth} />
          </Box>
          <Box>
            <Chorus synth={synth} />
          </Box>
          <Box>
            <Distortion synth={synth} />
          </Box>
          <Box>
            <Reverb synth={synth} />
          </Box>
          <Box>
            <Phaser synth={synth} />
          </Box>
          <Box>
            <PingPongDelay synth={synth} />
          </Box>
          <Box>
            <Tremolo synth={synth} />
          </Box>
          <Box>
            <Vibrato synth={synth} />
          </Box>
          <Box>
            <Panner3D synth={synth} />
          </Box>
        </VStack>
      </Box>
    </>
  );
}
