/* eslint-disable react/jsx-props-no-spreading */
import { Slider } from '@chakra-ui/react';

// Wraps the Chakra v3 compound Slider so callers keep the simple
// `onChange(number)` / `defaultValue={number}` API used throughout the app.
export default function EffectSlider({
  onChange,
  value,
  defaultValue,
  trackBg = 'custom.50',
  ...rest
}) {
  const vertical = rest.orientation === 'vertical';
  return (
    <Slider.Root
      colorPalette="custom"
      height={vertical ? '100%' : undefined}
      flexGrow={vertical ? undefined : 1}
      value={value !== undefined ? [value] : undefined}
      defaultValue={defaultValue !== undefined ? [defaultValue] : undefined}
      onValueChange={onChange ? (details) => onChange(details.value[0]) : undefined}
      {...rest}
    >
      <Slider.Control>
        <Slider.Track bg={trackBg}>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
}
