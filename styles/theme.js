/* eslint-disable quote-props */
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

// Colors are semantic tokens with light (`base`) and dark (`_dark`) values,
// switched by the `.dark` class on <html>.
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-fraunces), Georgia, "Times New Roman", serif' },
        body: { value: 'var(--font-syne), system-ui, -apple-system, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        custom: {
          '50':  { value: { base: '#FDF2FA', _dark: '#211B36' } }, // panel surface
          '100': { value: { base: '#FAE0F2', _dark: '#2C2447' } }, // header / chip / border
          '200': { value: { base: '#F3C4E5', _dark: '#15101F' } }, // value chip (inset)
          '300': { value: { base: '#E9B3D7', _dark: '#3A3158' } }, // stronger edge
          '400': { value: { base: '#E89BD1', _dark: '#3E2F66' } }, // active highlight
          '500': { value: { base: '#B83A8C', _dark: '#FF4D9D' } }, // primary (solid)
          '600': { value: { base: '#A6327D', _dark: '#FF6FB0' } }, // hover / muted text
          '700': { value: { base: '#7E2660', _dark: '#E03A87' } }, // active
          '800': { value: { base: '#5E1A46', _dark: '#B02C69' } },
          '900': { value: { base: '#2C0E22', _dark: '#ECE8FF' } }, // ink / text
          accent: { value: { base: '#C2410C', _dark: '#36E0E0' } },
          graph: { value: { base: '#B83A8C', _dark: '#36E0E0' } }, // oscilloscope stroke
          // page backgrounds
          background: {
            value: {
              base: 'linear-gradient(135deg, #FBD3EE 0%, #FFC8A8 100%)',
              _dark: 'radial-gradient(130% 130% at 72% -10%, #271C49 0%, #0E0A18 62%)',
            },
          },
          invbackground: {
            value: {
              base: 'linear-gradient(135deg, #FFC8A8 0%, #FBD3EE 100%)',
              _dark: 'linear-gradient(135deg, #2C2447 0%, #211B36 100%)',
            },
          },
          // `colorPalette="custom"` slots used by Button / Switch / Slider / Progress
          solid: { value: '{colors.custom.500}' },
          contrast: { value: { base: '#FFF4FB', _dark: '#16111F' } },
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
