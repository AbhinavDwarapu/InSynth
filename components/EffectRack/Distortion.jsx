import {
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';

import { useState } from 'react';

export default function Distortion({ synth }) {
  const [toggle, setToggle] = useState('');
  const [distort, setDistort] = useState(0);
  const [overSample, setOverSample] = useState(0);

  function handleClick(checked) {
    if (toggle) {
      synth.Distortion.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Distortion.set({
        wet: checked,
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
    <div id="distortion">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box color="custom.900" textAlign="center">Distortion Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" textAlign="center" onToggle={handleClick} checked={toggle} />
        <Box color="custom.900" textAlign="left" fontSize="sm">Distortion</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={5} step={0.1} onChange={handleDistort} />
          <Box color="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{distort.toFixed(1)}</Box>
        </HStack>
        <Box color="custom.900" textAlign="left" fontSize="sm">Over Sample</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={4} step={2} onChange={handleSample} />
          <Box color="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">
            {overSample}
            x
          </Box>
        </HStack>
      </Flex>
    </div>
  );
}
