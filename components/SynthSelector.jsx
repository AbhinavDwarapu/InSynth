/* eslint-disable react/jsx-no-bind */
import {
  Grid,
  Text,
  Button,
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
    <Grid textAlign="center" mt={4}>
      <Text fontSize="3xl" mb={1}>Select Synth</Text>
      <Button
        isDisabled={isDisabled}
        isActive={AMSynth}
        onClick={changeSynth}
        width={48}
        margin="auto"
        mb={2}
        mt={4}
      >
        AMSynth
      </Button>
      <Button
        isDisabled={isDisabled}
        isActive={!AMSynth}
        onClick={changeSynth}
        width={48}
        margin="auto"
      >
        FMSynth
      </Button>
    </Grid>
  );
}
