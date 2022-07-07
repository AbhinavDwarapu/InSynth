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

export default function Phaser({ synth }) {
  const [toggle, setToggle] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [octaves, setOctaves] = useState(0);
  const [baseFreq, setBaseFreq] = useState(0);

  function handleClick(e) {
    if (toggle) {
      synth.Phaser.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Phaser.set({
        wet: e.target.checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }
  function handleFreq(e) {
    if (!toggle) {
      setToggle(true);
    }
    setFrequency(e);
    synth.Phaser.set({
      wet: 1,
      frequency: e,
    });
    synth.chainEffects();
  }
  function handleOctave(e) {
    if (!toggle) {
      setToggle(true);
    }
    setOctaves(e);
    synth.Phaser.set({
      wet: 1,
      octaves: e,
    });
    synth.chainEffects();
  }

  function handleBaseFreq(e) {
    if (!toggle) {
      setToggle(true);
    }
    setBaseFreq(e);
    synth.Phaser.set({
      wet: 1,
      baseFrequency: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="phaser">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Phaser Effect</Box>
        <Switch mt={1} colorScheme="custom" onChange={handleClick} isChecked={toggle} textAlign="center" />

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Frequency</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={1} min={1} max={50} onChange={handleFreq}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{frequency}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Octaves</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={10} onChange={handleOctave}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{octaves}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Base Frequency</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={800} onChange={handleBaseFreq}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{baseFreq}</Box>
        </HStack>
      </Flex>
    </div>

  );
}
