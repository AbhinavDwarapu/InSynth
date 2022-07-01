import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function Distortion({ synth, isDisabled }) {
  const [value, setValue] = useState('');

  function handleClick(e) {
    if (value) {
      synth.setDistortionEffect(0);
      synth.chainEffects();
      setValue(false);
    } else {
      synth.setDistortionEffect(e.target.checked, 0);
      synth.chainEffects();
      setValue(true);
    }
  }

  function handleSlider(e) {
    if (!value) {
      setValue(true);
    }

    synth.setDistortionEffect(1, e);
    synth.chainEffects();
  }
  return (
    <>
      <h1>Distortion Effect</h1>
      <Switch onChange={handleClick} isChecked={value} isDisabled={isDisabled} />
      <Slider aria-label="slider-ex-1" defaultValue={0} min={0} max={1} step={0.05} onChange={handleSlider} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
