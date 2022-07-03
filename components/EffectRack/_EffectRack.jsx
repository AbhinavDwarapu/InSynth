import {
  Box,
  VStack,
} from '@chakra-ui/react';
import BitCrusher from './BitCrusher';
import Chorus from './Chorus';
// import Compressor from './Compressor';
import Distortion from './Distortion';
// import BiquadFilter from './BiquadFilter';
import Reverb from './Reverb';

export default function EffectRack({ synth, isDisabled }) {
  return (
    <VStack align="stretch" spacing="24px" overflow="auto" height={804}>
      <Box fontSize="lg" alignItems="center" justifyContent="center" display="flex" height={8} bg="gray.200" roundedBottom="lg">Effect Rack</Box>

      <Box>
        <BitCrusher synth={synth} isDisabled={isDisabled} />
      </Box>
      {/* <Box>
        <BiquadFilter synth={synth} isDisabled={isDisabled} />
      </Box> */}
      <Box>
        <Chorus synth={synth} isDisabled={isDisabled} />
      </Box>
      {/* <Box>
        <Compressor synth={synth} isDisabled={isDisabled} />
      </Box> */}
      <Box>
        <Distortion synth={synth} isDisabled={isDisabled} />
      </Box>
      <Box>
        <Reverb synth={synth} isDisabled={isDisabled} />
      </Box>

    </VStack>
  );
}
