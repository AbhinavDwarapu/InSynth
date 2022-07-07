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

export default function AutoWah({ synth }) {
  const [toggle, setToggle] = useState('');
  const [frequency, setFrequency] = useState(1);
  const [octaves, setOctaves] = useState(1);
  const [sensitivity, setSensitivity] = useState(1);

  function handleClick(e) {
    if (toggle) {
      synth.AutoWah.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.AutoWah.set({
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
    synth.AutoWah.set({
      wet: 1,
      baseFrequency: e,
    });
    synth.chainEffects();
  }
  function handleOctaves(e) {
    if (!toggle) {
      setToggle(true);
    }
    setOctaves(e);
    synth.AutoWah.set({
      wet: 1,
      octaves: e,
    });
    synth.chainEffects();
  }
  function handleSensitivity(e) {
    if (!toggle) {
      setToggle(true);
    }
    setSensitivity(e);
    synth.AutoWah.set({
      wet: 1,
      sensitivity: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="autowah">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">AutoWah Effect</Box>
        <Switch mt={1} colorScheme="custom" onChange={handleClick} isChecked={toggle} textAlign="center" />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Frequency</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={1} min={1} max={25} onChange={handleFrequency}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{frequency}</Box>
        </HStack>
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Octaves</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={1} min={1} max={10} onChange={handleOctaves}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{octaves}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Sensitivity</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={-40} min={-40} max={0} onChange={handleSensitivity}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{sensitivity}</Box>
        </HStack>

      </Flex>
    </div>

  );
}
