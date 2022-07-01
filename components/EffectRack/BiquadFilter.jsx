import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function BiquadFilter({ synth, isDisabled }) {
  const [value, setValue] = useState('');

  function handleClick(e) {
    if (value) {
      synth.setBiquadFilterEffect(0);
      synth.chainEffects();
      setValue(false);
    } else {
      synth.setBiquadFilterEffect(e.target.checked, 0.1);
      synth.chainEffects();
      setValue(true);
    }
  }

  function handleType(e) {
    if (!value) {
      setValue(true);
    }
    synth.setBiquadFilterEffect(
      1,
      synth.BiquadFilter.get().frequency,
      e.target.value,
      synth.BiquadFilter.get().rolloff,
    );
  }

  function handleFreq(e) {
    if (!value) {
      setValue(true);
    }

    synth.setBiquadFilterEffect(
      1,
      e,
      synth.BiquadFilter.get().type,
      synth.BiquadFilter.get().rolloff,
    );
    synth.chainEffects();
  }

  return (
    <>
      <h1>BiquadFilter Effect</h1>
      <Switch onChange={handleClick} isChecked={value} isDisabled={isDisabled} />
      <Select onInput={handleType} isDisabled={isDisabled}>
        <option>lowpass</option>
        <option>highpass</option>
        <option>bandpass</option>
        <option>lowshelf</option>
        <option>highshelf</option>
        <option>notch</option>
        <option>allpass</option>
        <option>peaking</option>
      </Select>

      <Slider aria-label="slider-ex-1" defaultValue={1} min={1} max={10000} onChange={handleFreq} isDisabled={isDisabled}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
