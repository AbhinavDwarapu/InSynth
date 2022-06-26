import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function Filter({ synth }) {
  const [value, setValue] = useState('');

  function handleClick(e) {
    if (value) {
      synth.setFilterEffect(0);
      synth.chainEffects();
      setValue(false);
    } else {
      synth.setFilterEffect(e.target.checked, 0.1);
      synth.chainEffects();
      setValue(true);
    }
  }

  function handleSlider(e) {
    if (!value) {
      setValue(true);
    }

    synth.setFilterEffect(1, e, 'highpass');
    synth.chainEffects();
  }

  return (
    <>
      <h1>Filter Effect</h1>
      <Switch onChange={handleClick} isChecked={value} />
      <Slider aria-label="slider-ex-1" defaultValue={1} min={1} max={20000} onChange={handleSlider}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
