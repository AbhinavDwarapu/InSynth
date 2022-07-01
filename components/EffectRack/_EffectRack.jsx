import {
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import BitCrusher from './BitCrusher';
import Chorus from './Chorus';
import Compressor from './Compressor';
import Distortion from './Distortion';
import BiquadFilter from './BiquadFilter';
import Reverb from './Reverb';

export default function EffectRack({ synth, isDisabled }) {
  return (
    <Box>
      <h1>Effect Rack</h1>
      <Grid templateColumns="repeat(1, 1fr)">
        <GridItem>
          <BitCrusher synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem>
          <Chorus synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem>
          <Compressor synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem>
          <Distortion synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem>
          <BiquadFilter synth={synth} isDisabled={isDisabled} />
        </GridItem>
        <GridItem>
          <Reverb synth={synth} isDisabled={isDisabled} />
        </GridItem>
      </Grid>
    </Box>
  );
}
