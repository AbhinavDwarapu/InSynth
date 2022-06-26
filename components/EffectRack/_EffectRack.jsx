import {
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import BitCrusher from './BitCrusher';
import Chorus from './Chorus';
import Compressor from './Compressor';
import Distortion from './Distortion';
import Filter from './Filter';
import Reverb from './Reverb';

export default function EffectRack({ synth }) {
  return (
    <Box>
      <h1>Effect Rack</h1>
      <Grid templateColumns="repeat(1, 1fr)">
        <GridItem>
          <BitCrusher synth={synth} />
        </GridItem>
        <GridItem>
          <Chorus synth={synth} />
        </GridItem>
        <GridItem>
          <Compressor synth={synth} />
        </GridItem>
        <GridItem>
          <Distortion synth={synth} />
        </GridItem>
        <GridItem>
          <Filter synth={synth} />
        </GridItem>
        <GridItem>
          <Reverb synth={synth} />
        </GridItem>
      </Grid>
    </Box>
  );
}
