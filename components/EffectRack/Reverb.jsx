import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function Reverb({ synth }) {
  const [value, setValue] = useState('');

  function handleClick(e) {
    if (value) {
      synth.setReverbEffect(0);
      synth.chainEffects();
      setValue(false);
    } else {
      synth.setReverbEffect(e.target.checked, 0.1);
      synth.chainEffects();
      setValue(true);
    }
  }

  function handleSlider(e) {
    if (!value) {
      setValue(true);
    }

    synth.setReverbEffect(1, e);
    synth.chainEffects();
  }

  return (
    <>
      <h1>Reverb Effect</h1>
      <Switch onChange={handleClick} isChecked={value} />
      <Slider aria-label="slider-ex-1" defaultValue={0.01} min={0.01} max={5} step={0.05} onChange={handleSlider}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
