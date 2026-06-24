/* eslint-disable no-param-reassign */

import {
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';

import React, { useState } from 'react';

export default function Volume({ synth, encoder }) {
  const [volume, setVolume] = useState(-5);
  const [dialVolume, setDialVolume] = useState(encoder);

  function handleVolume(e) {
    setVolume(e);

    synth.synth.volume.value = e;
  }

  if (encoder !== dialVolume) {
    setDialVolume(encoder);

    if (encoder === 0) {
      setVolume(-100);
    } else {
      setVolume((Math.log(encoder) * 20).toFixed(0));
    }
  }

  return (
    <div id="volume">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Volume Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" textAlign="center" checked disabled />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Volume</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" defaultValue={-5} min={-96} max={0} onChange={handleVolume} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{volume}</Box>
        </HStack>

      </Flex>
    </div>
  );
}
