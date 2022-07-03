import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function BitCrusher({ synth, isDisabled }) {
  const [toggle, setToggle] = useState('');
  const [bits, setBits] = useState(7);

  function handleClick(e) {
    if (toggle) {
      synth.setBitCrusherEffect(0);
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.setBitCrusherEffect(e.target.checked, 7);
      synth.chainEffects();
      setToggle(true);
    }
  }
  function handleSlider(e) {
    if (!toggle) {
      setToggle(true);
    }
    setBits(e);
    synth.setBitCrusherEffect(1, e);
    synth.chainEffects();
  }

  return (
    <Flex direction="column" bg="gray.100" rounded="base" width="90%" display="flex" margin="auto" p={4}>
      <Box textAlign="center">BitCrusher Effect</Box>
      <Switch onChange={handleClick} isChecked={toggle} isDisabled={isDisabled} textAlign="center" />
      <Box textAlign="left" fontSize="sm">Bits</Box>
      <HStack>
        <Slider aria-label="slider-ex-1" flexGrow="1" defaultValue={7} min={7} max={16} onChange={handleSlider} isDisabled={isDisabled}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box bg="gray.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{bits}</Box>
      </HStack>

    </Flex>

  );
}
