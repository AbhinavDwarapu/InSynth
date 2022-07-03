/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function ADSREnvelope({ synth, isDisabled }) {
  const [attackVal, setAttackVal] = useState(30);
  const [decayVal, setDecayVal] = useState(30);
  const [sustainVal, setSustainVal] = useState(30);
  const [releaseVal, setReleaseVal] = useState(30);

  function getAttack(e) {
    synth.attack = (e / 100).toFixed(2);
    setAttackVal((e));
  }
  function getDecay(e) {
    synth.decay = (e / 100).toFixed(2);
    setDecayVal((e));
  }
  function getSustain(e) {
    synth.sustain = (e / 100).toFixed(2);
    setSustainVal((e));
  }
  function getRelease(e) {
    synth.release = (e / 100).toFixed(2);
    setReleaseVal(e);
  }

  return (
    <Flex direction="column" width={256} height={256} flexGrow="1">
      <Box textColor="custom.900" fontSize="lg" alignItems="center" justifyContent="center" display="flex" height={8} bg="custom.100" roundedBottom="lg" w={210} transform="translate(+22px, 0px)">ADSR Envelope</Box>
      <Flex direction="row" mt={5} mb={3} textAlign="center">
        <Spacer />
        <Text textColor="custom.900" w="20%">Attack</Text>
        <Spacer />
        <Text textColor="custom.900" w="20%">Decay</Text>
        <Spacer />
        <Text textColor="custom.900" w="20%">Sus.</Text>
        <Spacer />
        <Text textColor="custom.900" w="20%">Rel.</Text>
        <Spacer />
      </Flex>
      <Flex direction="row" flexGrow="1" pb={4}>
        <Spacer />
        <Slider colorScheme="custom" aria-label="slider-ex-3" defaultValue={30} orientation="vertical" w="20%" onChange={getAttack} isDisabled={isDisabled}>
          <SliderTrack bg="custom.100">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Spacer />
        <Slider colorScheme="custom" aria-label="slider-ex-3" defaultValue={30} orientation="vertical" w="20%" onChange={getDecay} isDisabled={isDisabled}>
          <SliderTrack bg="custom.100">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Spacer />
        <Slider colorScheme="custom" aria-label="slider-ex-3" defaultValue={30} orientation="vertical" w="20%" onChange={getSustain} isDisabled={isDisabled}>
          <SliderTrack bg="custom.100">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Spacer />
        <Slider colorScheme="custom" aria-label="slider-ex-3" defaultValue={30} orientation="vertical" w="20%" onChange={getRelease} isDisabled={isDisabled}>
          <SliderTrack bg="custom.100">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Spacer />
      </Flex>
      <Flex direction="row" mb={3}>
        <Spacer />
        <Box textColor="custom.900" bg="custom.200" w="20%" h="95%" boxShadow="inner" textAlign="center" rounded="base">{attackVal}</Box>
        <Spacer />
        <Box textColor="custom.900" bg="custom.200" w="20%" h="95%" boxShadow="inner" textAlign="center" rounded="base">{decayVal}</Box>
        <Spacer />
        <Box textColor="custom.900" bg="custom.200" w="20%" h="95%" boxShadow="inner" textAlign="center" rounded="base">{sustainVal}</Box>
        <Spacer />
        <Box textColor="custom.900" bg="custom.200" w="20%" h="95%" boxShadow="inner" textAlign="center" rounded="base">{releaseVal}</Box>
        <Spacer />
      </Flex>

    </Flex>
  );
}
