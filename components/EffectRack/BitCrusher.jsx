import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function BitCrusher({ synth, isDisabled }) {
  const [value, setValue] = useState('');

  function handleClick(e) {
    if (value) {
      synth.setBitCrusherEffect(0);
      synth.chainEffects();
      setValue(false);
    } else {
      synth.setBitCrusherEffect(e.target.checked, 7);
      synth.chainEffects();
      setValue(true);
    }
  }
  function handleSlider(e) {
    if (!value) {
      setValue(true);
    }

    synth.setBitCrusherEffect(1, e);
    synth.chainEffects();
  }

  return (
    <>
      <h1>BitCrusher Effect</h1>
      <Switch onChange={handleClick} isChecked={value} isDisabled={isDisabled} />
      <Slider aria-label="slider-ex-1" defaultValue={7} min={7} max={16} onChange={handleSlider} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>

  );
}
