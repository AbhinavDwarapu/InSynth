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
  synth,
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
    <div id="synthselector">
      <Flex direction="column" width={256} height={256}>
        <Box
          textColor="custom.900"
          fontSize="lg"
          alignItems="center"
          justifyContent="center"
          display="flex"
          height={8}
          bg="custom.100"
          roundedBottom="lg"
          w={210}
          boxShadow="lg"
          transform="translate(+22px, 0px)"
        >
          Select Synth
        </Box>
        <Grid textAlign="center" flexGrow="1">
          <GridItem margin="auto">
            <Button colorScheme="custom" rounded="base" isActive={AMSynth} onClick={changeSynth} width={48} margin="auto" mb={1}>
              AMSynth
            </Button>
            <Button colorScheme="custom" rounded="base" isActive={!AMSynth} onClick={changeSynth} width={48} margin="auto" mt={1}>
              FMSynth
            </Button>
          </GridItem>
        </Grid>
      </Flex>
    </div>

  );
}
