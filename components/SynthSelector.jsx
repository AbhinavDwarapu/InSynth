/* eslint-disable react/jsx-no-bind */
import {
  Box,
  Select,
} from '@chakra-ui/react';

export default function SynthSelector({
  synth,
}) {
  function changeSynth(e) {
    synth.reInit((e.target.value).toString());
  }

  return (
    <Box>
      <h1>Set Controller</h1>
      <Select onInput={changeSynth}>
        <option>AMSynth</option>
        <option>FMSynth</option>
      </Select>
    </Box>
  );
}
