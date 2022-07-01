import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function Chorus({ synth, isDisabled }) {
  const [value, setValue] = useState('');

  function handleClick() {
    if (value) {
      synth.setChorusEffect(0);
      synth.chainEffects();
      setValue(false);
    } else {
      synth.setChorusEffect(
        1,
        synth.Chorus.get().frequency,
        synth.Chorus.get().delay,
        synth.Chorus.get().depth,
      );
      synth.chainEffects();
      setValue(true);
    }
  }
  function handleFreq(e) {
    if (!value) {
      setValue(true);
    }

    synth.setChorusEffect(
      1,
      e,
      synth.Chorus.get().delay,
      synth.Chorus.get().depth,
    );
    synth.chainEffects();
  }
  function handleDelay(e) {
    if (!value) {
      setValue(true);
    }

    synth.setChorusEffect(
      1,
      synth.Chorus.get().frequency,
      e,
      synth.Chorus.get().depth,
    );
    synth.chainEffects();
  }
  function handleDepth(e) {
    if (!value) {
      setValue(true);
    }

    synth.setChorusEffect(
      1,
      synth.Chorus.get().frequency,
      synth.Chorus.get().delay,
      e,
    );
    synth.chainEffects();
  }

  return (
    <>
      <h1>Chorus Effect</h1>
      <Switch onChange={handleClick} isChecked={value} isDisabled={isDisabled} />
      <Slider aria-label="slider-ex-1" defaultValue={0} min={0} max={10} step={0.25} onChange={handleFreq} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider aria-label="slider-ex-1" defaultValue={1} min={1} max={1000} onChange={handleDelay} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider aria-label="slider-ex-1" defaultValue={0} min={0} max={1} step={0.05} onChange={handleDepth} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
