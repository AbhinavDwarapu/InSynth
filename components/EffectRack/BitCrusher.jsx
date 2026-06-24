import {
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';
import { useState } from 'react';

export default function BitCrusher({ synth }) {
  const [toggle, setToggle] = useState('');
  const [bits, setBits] = useState(1);

  function handleClick(checked) {
    if (toggle) {
      synth.BitCrusher.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.BitCrusher.set({
        wet: checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }
  function handleSlider(e) {
    if (!toggle) {
      setToggle(true);
    }
    setBits(e);
    synth.BitCrusher.set({
      wet: 1,
      bits: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="bitcrusher">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">BitCrusher Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" onToggle={handleClick} checked={toggle} textAlign="center" />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Bits</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={1} min={1} max={16} onChange={handleSlider} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{bits}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
