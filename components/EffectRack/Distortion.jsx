import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function Distortion({ synth, isDisabled }) {
  const [toggle, setToggle] = useState('');
  const [distort, setDistort] = useState(0);
  const [overSample, setOverSample] = useState(0);

  function handleClick(e) {
    if (toggle) {
      synth.Distortion.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Distortion.set({
        wet: e.target.checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleDistort(e) {
    if (!toggle) {
      setToggle(true);
    }
    setDistort(e);
    synth.Distortion.set({
      wet: 1,
      distortion: e,
    });
    synth.chainEffects();
  }
  function handleSample(e) {
    if (!toggle) {
      setToggle(true);
    }
    setOverSample(e);
    switch (e) {
      case 2:
        synth.Distortion.set({
          wet: 1,
          oversample: '2x',
        });
        break;
      case 4:
        synth.Distortion.set({
          wet: 1,
          oversample: '4x',
        });
        break;
      default:
        synth.Distortion.set({
          wet: 1,
          oversample: 'none',
        });
        break;
    }
    synth.chainEffects();
  }
  return (
    <Flex direction="column" boxShadow="base" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
      <Box textColor="custom.900" textAlign="center">Distortion Effect</Box>
      <Switch colorScheme="custom" textAlign="center" onChange={handleClick} isChecked={toggle} isDisabled={isDisabled} />
      <Box textColor="custom.900" textAlign="left" fontSize="sm">Distortion</Box>
      <HStack>
        <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={5} step={0.1} onChange={handleDistort} isDisabled={isDisabled}>
          <SliderTrack bg="custom.50">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{distort.toFixed(1)}</Box>
      </HStack>
      <Box textColor="custom.900" textAlign="left" fontSize="sm">Over Sample</Box>
      <HStack>
        <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={4} step={2} onChange={handleSample} isDisabled={isDisabled}>
          <SliderTrack bg="custom.50">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">
          {overSample}
          x
        </Box>
      </HStack>
    </Flex>
  );
}
