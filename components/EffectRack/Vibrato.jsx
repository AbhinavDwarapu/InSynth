import {
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';

import { useState } from 'react';

export default function Vibrato({ synth }) {
  const [toggle, setToggle] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [depth, setDepth] = useState(0);

  function handleClick(checked) {
    if (toggle) {
      synth.Vibrato.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Vibrato.set({
        wet: checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleFrequency(e) {
    if (!toggle) {
      setToggle(true);
    }
    setFrequency(e);
    synth.Vibrato.set({
      wet: 1,
      frequency: e,
    });
    synth.chainEffects();
  }

  function handleDepth(e) {
    if (!toggle) {
      setToggle(true);
    }
    setDepth(e);
    synth.Vibrato.set({
      wet: 1,
      depth: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="vibrato">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Vibrato Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" textAlign="center" onToggle={handleClick} checked={toggle} />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Frequency</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" defaultValue={1} min={1} max={1000} onChange={handleFrequency} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{frequency}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Depth</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" defaultValue={0} min={0} max={1} step={0.05} onChange={handleDepth} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{depth}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
