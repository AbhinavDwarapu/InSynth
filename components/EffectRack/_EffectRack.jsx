import {
  Box,
  VStack,
} from '@chakra-ui/react';
import BitCrusher from './BitCrusher';
import Chorus from './Chorus';
import Distortion from './Distortion';
import Reverb from './Reverb';
import Phaser from './Phaser';
import Chebyshev from './Chebyshev';
import PingPongDelay from './PingPongDelay';
import Tremolo from './Tremolo';
import Vibrato from './Vibrato';
import AutoWah from './AutoWah';
import Panner3D from './Panner3D';
import Volume from './Volume';

export default function EffectRack({ synth, encoder }) {
  return (
    <VStack align="stretch" spacing="24px" mb={5}>
      <Box
        textColor="custom.900"
        fontSize="lg"
        alignItems="center"
        justifyContent="center"
        display="flex"
        height={8}
        bg="custom.100"
        roundedBottom="lg"
        w={224}
        boxShadow="lg"
        transform="translate(+14px, 0px)"
      >
        Effect Rack
      </Box>

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
  );
}
