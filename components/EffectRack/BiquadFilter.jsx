import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  Flex,
  Box,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function BiquadFilter({ synth, isDisabled }) {
  const [toggle, setToggle] = useState('');

  function handleClick(e) {
    if (toggle) {
      synth.BiquadFilter.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.BiquadFilter.set({
        wet: e.target.checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleType(e) {
    if (!toggle) {
      setToggle(true);
    }
    synth.BiquadFilter.set({
      wet: 1,
      type: e.target.value,
    });
  }

  function handleFreq(e) {
    if (!toggle) {
      setToggle(true);
    }

    synth.BiquadFilter.set({
      wet: 1,
      frequency: e,
    });
    synth.chainEffects();
  }

  return (
    <Flex direction="column" bg="gray.900" rounded="base" width="90%" alignItems="center" justifyContent="center" display="flex" margin="auto" p={4}>
      <Box>BiquadFilter Effect</Box>
      <Switch onChange={handleClick} isChecked={toggle} isDisabled={isDisabled} />
      <Select onInput={handleType} isDisabled={isDisabled}>
        <option>lowpass</option>
        <option>highpass</option>
        <option>bandpass</option>
        <option>lowshelf</option>
        <option>highshelf</option>
        <option>notch</option>
        <option>allpass</option>
        <option>peaking</option>
      </Select>

      <Slider aria-label="slider-ex-1" defaultValue={1} min={1} max={10000} onChange={handleFreq} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
}
