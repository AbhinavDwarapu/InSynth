import {
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';
import { useState } from 'react';

export default function Chebyshev({ synth }) {
  const [toggle, setToggle] = useState('');
  const [order, setOrder] = useState(0);
  const [overSample, setOverSample] = useState(0);

  function handleClick(checked) {
    if (toggle) {
      synth.Chebyshev.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Chebyshev.set({
        wet: checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleOrder(e) {
    if (!toggle) {
      setToggle(true);
    }
    setOrder(e);
    synth.Chebyshev.set({
      wet: 1,
      order: e,
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
        synth.Chebyshev.set({
          wet: 1,
          oversample: '2x',
        });
        break;
      case 4:
        synth.Chebyshev.set({
          wet: 1,
          oversample: '4x',
        });
        break;
      default:
        synth.Chebyshev.set({
          wet: 1,
          oversample: 'none',
        });
        break;
    }
    synth.chainEffects();
  }

  return (
    <div id="chebyshev">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Chebyshev Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" onToggle={handleClick} checked={toggle} textAlign="center" />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Order</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={100} onChange={handleOrder} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{order}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Oversample</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={2} onChange={handleSample} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{overSample}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
