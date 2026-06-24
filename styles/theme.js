/* eslint-disable quote-props */
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

// Pink theme. Numeric scale 50..900 plus two gradient background tokens.
const custom = {
  background: { value: 'linear-gradient(to top right, #F9ACFB 0%, #FF9966 100%)' },
  invbackground: { value: 'linear-gradient(to top right, #FF9966 0%, #F9ACFB 100%)' },
  '50': { value: '#ffe3fa' }, // PANEL BACKGROUND
  '100': { value: '#fcc0f0' }, // EFFECT PANEL BACKGROUNDS, TITLE BACKGROUND, PITCHBEND BACKGROUND
  '200': { value: '#f2b3f8' }, // DATA DISPLAY
  '300': { value: '#f399ff' },
  '400': { value: '#f58fff' },
  '500': { value: '#bf80c4' }, // SWITCH, SLIDER TRACK, +- BUTTON, PROGRESS FILL, INACTIVE BUTTON
  '600': { value: '#ae5cb2' }, // +- BUTTON ACTIVE
  '700': { value: '#8e3b91' }, // ACTIVE BUTTON
  '800': { value: '#7b2b7e' },
  '900': { value: '#3b173d' }, // TEXT COLOUR
};

const config = defineConfig({
  theme: {
    tokens: {
      colors: { custom },
    },
    // Semantic slots so `colorPalette="custom"` works on Button/Switch/Slider/Progress.
    semanticTokens: {
      colors: {
        custom: {
          solid: { value: '{colors.custom.500}' },
          contrast: { value: '{colors.custom.50}' },
          fg: { value: '{colors.custom.900}' },
          muted: { value: '{colors.custom.100}' },
          subtle: { value: '{colors.custom.200}' },
          emphasized: { value: '{colors.custom.300}' },
          focusRing: { value: '{colors.custom.500}' },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
