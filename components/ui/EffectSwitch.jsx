/* eslint-disable react/jsx-props-no-spreading */
import { Switch } from '@chakra-ui/react';

// Wraps the Chakra v3 compound Switch so callers keep the simple
// `onToggle(boolean)` / `checked` API used throughout the app.
export default function EffectSwitch({
  checked,
  onToggle,
  disabled,
  ...rest
}) {
  return (
    <Switch.Root
      colorPalette="custom"
      alignSelf="center"
      checked={Boolean(checked)}
      disabled={disabled}
      onCheckedChange={onToggle ? (details) => onToggle(details.checked) : undefined}
      {...rest}
    >
      <Switch.HiddenInput />
      <Switch.Control />
    </Switch.Root>
  );
}
