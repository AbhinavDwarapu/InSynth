/* eslint-disable react/jsx-no-bind */
import {
  Grid,
  GridItem,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function SynthSelector({
  synth, isDisabled,
}) {
  const [AMSynth, setAMSynth] = useState(true);

  function changeSynth(e) {
    synth.synthInit((e.target.innerHTML).toString());
    synth.chainEffects();
    setAMSynth(!AMSynth);

    if (e.target.innerHTML === 'AMSynth') {
      setAMSynth(true);
    } else {
      setAMSynth(false);
    }
  }

  return (
    <Flex direction="column" width={256} height={256}>
      <Grid textAlign="center" flexGrow="1">
        <GridItem margin="auto">
          <Button isDisabled={isDisabled} isActive={AMSynth} onClick={changeSynth} width={48} margin="auto" mb={1}>
            AMSynth
          </Button>
          <Button isDisabled={isDisabled} isActive={!AMSynth} onClick={changeSynth} width={48} margin="auto" mt={1}>
            FMSynth
          </Button>
        </GridItem>
      </Grid>
      <Box fontSize="lg" alignItems="center" justifyContent="center" display="flex" height={10} bg="gray.200" rounded="lg">Select Synth</Box>
    </Flex>
  );
}
