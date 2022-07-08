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

export default function Vibrato({ synth }) {
  const [volume, setVolume] = useState(-5);

  function handleVolume(e) {
    setVolume(e);
    synth.Volume.set({
      volume: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="vibrato">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Volume Effect</Box>
        <Switch mt={1} colorScheme="custom" textAlign="center" isChecked isDisabled />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Volume</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" defaultValue={-5} min={-96} max={0} onChange={handleVolume}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{volume}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
