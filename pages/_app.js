/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [appTheme, setTheme] = useState(theme);
  useEffect(() => {
    setTheme(theme);
  }, []);

  return (
    <ChakraProvider theme={appTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
