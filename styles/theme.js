/* eslint-disable quote-props */
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    background: '#8a8a8a',
    panel: '#ffffff',
  },
  components: {
    StatNumber: {
      variants: {
        'display': {
          boxShadow: 'inner',
          textAlign: 'center',
          bg: 'gray.100',
        },
      },
    },
  },
});

export default theme;
