import {
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';

import { useState } from 'react';

export default function Reverb({ synth }) {
  const [toggle, setToggle] = useState('');
  const [decay, setDecay] = useState(0);

  function handleClick(checked) {
    if (toggle) {
      synth.Reverb.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Reverb.set({
        wet: checked,
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
    <div id="reverb">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Reverb Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" textAlign="center" onToggle={handleClick} checked={toggle} />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Decay</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" defaultValue={0.01} min={0.01} max={5} step={0.05} onChange={handleDecay} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{decay.toFixed(2)}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
