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

export default function BitCrusher({ synth }) {
  const [toggle, setToggle] = useState('');
  const [bits, setBits] = useState(1);

  function handleClick(e) {
    if (toggle) {
      synth.BitCrusher.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.BitCrusher.set({
        wet: e.target.checked,
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
        <Switch mt={1} colorScheme="custom" onChange={handleClick} isChecked={toggle} textAlign="center" />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Bits</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={1} min={1} max={16} onChange={handleSlider}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{bits}</Box>
        </HStack>

      </Flex>
    </div>

  );
}
