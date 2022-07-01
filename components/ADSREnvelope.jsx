/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

export default function ADSREnvelope({ synth, isDisabled }) {
  function getAttack(e) {
    synth.attack = (e / 100).toFixed(2);
  }
  function getDecay(e) {
    synth.decay = (e / 100).toFixed(2);
  }
  function getSustain(e) {
    synth.sustain = (e / 100).toFixed(2);
  }
  function getRelease(e) {
    synth.release = (e / 100).toFixed(2);
  }

  return (
    <>
      <Grid>
        <GridItem textAlign="center" mt={4} mb={4}>
          <Text fontSize="3xl">ADSR Envelope</Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)" textAlign="center" maxH={32}>
        <GridItem>
          <Slider
            aria-label="slider-ex-3"
            defaultValue={30}
            orientation="vertical"
            height="20"
            onChange={getAttack}
            isDisabled={isDisabled}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </GridItem>
        <GridItem>
          <Slider
            aria-label="slider-ex-3"
            defaultValue={30}
            orientation="vertical"
            height="20"
            onChange={getDecay}
            isDisabled={isDisabled}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </GridItem>
        <GridItem>
          <Slider
            aria-label="slider-ex-3"
            defaultValue={30}
            orientation="vertical"
            height="20"
            onChange={getSustain}
            isDisabled={isDisabled}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </GridItem>
        <GridItem>
          <Slider
            aria-label="slider-ex-3"
            defaultValue={30}
            orientation="vertical"
            height="20"
            onChange={getRelease}
            isDisabled={isDisabled}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </GridItem>
        <GridItem>
          Attack
        </GridItem>
        <GridItem>
          Decay
        </GridItem>
        <GridItem>
          Sustain
        </GridItem>
        <GridItem>
          Release
        </GridItem>
      </Grid>
    </>
  );
}
