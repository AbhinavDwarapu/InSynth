/* eslint-disable quote-props */
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Gray
    custom:
    {
      background: 'linear-gradient(to top right, #FC8181 0%, #FEB2B2 100%)',
      //   50: '#f2f2f2', // PANEL BACKGROUND
      //   100: '#d9d9d9', // EFFECT PANEL BACKGROUNDS, TITLE BACKGROUND, PITCHBEND BACKGROUND
      //   200: '#bfbfbf', // BACKGROUND, DATA DISPLAY
      //   300: '#a6a6a6',
      //   400: '#8c8c8c',
      //   500: '#737373', // SWITCH, SLIDER TRACK, +- BUTTON INACTIVE, PROGRESS FILL, INACTIVE BUTTON
      //   600: '#595959', // +- BUTTON ACTIVE
      //   700: '#404040', // ACTIVE BUTTON
      //   800: '#262626',
      //   900: '#0d0d0d', // TEXT COLOUR
      // },

      // Test Theme
      50: '#FFF5F5', // PANEL BACKGROUND
      100: '#FED7D7', // EFFECT PANEL BACKGROUNDS, TITLE BACKGROUND, PITCHBEND BACKGROUND
      200: '#FEB2B2', // DATA DISPLAY
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#E53E3E', // SWITCH, SLIDER TRACK, +- BUTTON, PROGRESS FILL, INACTIVE BUTTON
      600: '#C53030', // +- BUTTON ACTIVE
      700: '#9B2C2C', // ACTIVE BUTTON
      800: '#262626',
      900: '#63171B', // TEXT COLOUR
    },

    // Wooden Theme
    //   50: '#FFAF7E', // PANEL BACKGROUND
    //   100: '#ED8C50', // EFFECT PANEL BACKGROUNDS, TITLE BACKGROUND, PITCHBEND BACKGROUND
    //   200: '#B14F12', // BACKGROUND, DATA DISPLAY
    //   300: '#a6a6a6',
    //   400: '#8c8c8c',
    //   500: '#B14F12', // SWITCH, SLIDER TRACK, +- BUTTON, PROGRESS FILL, INACTIVE BUTTON
    //   600: '#8B3500', // +- BUTTON ACTIVE
    //   700: '#8B3500', // ACTIVE BUTTON
    //   800: '#262626',
    //   900: '#000000', // TEXT COLOUR
    // },

    // Red

    //   50: '#ffe2ec',
    //   100: '#ffb3c5',
    //   200: '#fc839f',
    //   300: '#f95278',
    //   400: '#f62252',
    //   500: '#dd0939',
    //   600: '#ad032c',
    //   700: '#7c001e',
    //   800: '#4d0012',
    //   900: '#200005',
    // },

    // Purple
    //   50: '#f6e5ff',
    //   100: '#dcb6fe',
    //   200: '#bf86f9',
    //   300: '#a056f6',
    //   400: '#9327f2',
    //   500: '#870ed8',
    //   600: '#7409a9',
    //   700: '#5b067a',
    //   800: '#3c034a',
    //   900: '#1a001d',
    // },

    // Pinkish Purple

    //   50: '#ffffff',
    //   100: '#efc4e2',
    //   200: '#e09fcc',
    //   300: '#d27ab8',
    //   400: '#c455a2',
    //   500: '#aa3b89',
    //   600: '#852d6a',
    //   700: '#601f4d',
    //   800: '#3c1130',
    //   900: '#190313',
    // },
    // Blue

    //   50: '#e0fbfb',
    //   100: '#c0ecec',
    //   200: '#9fdede',
    //   300: '#7bd1d1',
    //   400: '#58c4c4',
    //   500: '#3faaaa',
    //   600: '#2e8484',
    //   700: '#1e5e5e',
    //   800: '#0a3a3a',
    //   900: '#001515',
    // },
  },
});

export default theme;
