import {
  Box,
  VStack,
} from '@chakra-ui/react';
import BitCrusher from './BitCrusher';
import Chorus from './Chorus';
import Distortion from './Distortion';
import Reverb from './Reverb';
import Phaser from './Phaser';

export default function EffectRack({ synth, isDisabled }) {
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
        <BitCrusher synth={synth} isDisabled={isDisabled} />
      </Box>
      <Box>
        <Chorus synth={synth} isDisabled={isDisabled} />
      </Box>
      <Box>
        <Distortion synth={synth} isDisabled={isDisabled} />
      </Box>
      <Box>
        <Reverb synth={synth} isDisabled={isDisabled} />
      </Box>
      <Box>
        <Phaser synth={synth} isDisabled={isDisabled} />
      </Box>

    </VStack>
  );
}
