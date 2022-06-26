/* eslint-disable react/jsx-no-bind */
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  MdGraphicEq,
} from '@chakra-ui/react';

export default function ADSREnvelope({ synth }) {
  function getAttack(e) {
    synth.setAttack((e / 100).toFixed(2));
  }
  function getDecay(e) {
    synth.setDecay((e / 100).toFixed(2));
  }
  function getSustain(e) {
    synth.setSustain((e / 100).toFixed(2));
  }
  function getRelease(e) {
    synth.setRelease((e / 100).toFixed(2));
  }

  return (
    <Box>
      <h1>ADSR Envelope</h1>
      <Slider
        ml={6}
        mr={6}
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
        onChange={getAttack}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        mr={6}
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
        onChange={getDecay}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        mr={6}
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
        onChange={getSustain}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb>
          <Box color="tomato" as={MdGraphicEq} />
        </SliderThumb>
      </Slider>
      <Slider
        aria-label="slider-ex-3"
        defaultValue={30}
        orientation="vertical"
        minH="32"
        onChange={getRelease}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
}
