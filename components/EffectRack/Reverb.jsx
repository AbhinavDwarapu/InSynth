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

export default function Reverb({ synth, isDisabled }) {
  const [toggle, setToggle] = useState('');
  const [decay, setDecay] = useState(0);

  function handleClick(e) {
    if (toggle) {
      synth.Reverb.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Reverb.set({
        wet: e.target.checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleDecay(e) {
    if (!toggle) {
      setToggle(true);
    }
    setDecay(e);
    synth.Reverb.set({
      wet: 1,
      decay: e,
    });
    synth.chainEffects();
  }

  return (
    <Flex direction="column" bg="gray.100" rounded="base" width="90%" display="flex" margin="auto" p={4}>
      <Box textAlign="center">Reverb Effect</Box>
      <Switch textAlign="center" onChange={handleClick} isChecked={toggle} isDisabled={isDisabled} />
      <Box textAlign="left" fontSize="sm">Decay</Box>
      <HStack>
        <Slider aria-label="slider-ex-1" defaultValue={0.01} min={0.01} max={5} step={0.05} onChange={handleDecay} isDisabled={isDisabled}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box bg="gray.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{decay.toFixed(2)}</Box>
      </HStack>

    </Flex>
  );
}
