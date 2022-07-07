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

export default function Tremolo({ synth }) {
  const [toggle, setToggle] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [depth, setDepth] = useState(0);

  function handleClick(e) {
    if (toggle) {
      synth.Tremolo.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Tremolo.set({
        wet: e.target.checked,
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
    synth.Tremolo.set({
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
    synth.Tremolo.set({
      wet: 1,
      depth: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="tremolo">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Tremolo Effect</Box>
        <Switch mt={1} colorScheme="custom" textAlign="center" onChange={handleClick} isChecked={toggle} />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Frequency</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" defaultValue={1} min={1} max={50} onChange={handleFrequency}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{frequency}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Depth</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" defaultValue={0} min={0} max={1} step={0.05} onChange={handleDepth}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{depth}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
