/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import system from '../styles/theme';
import { Toaster } from '../components/ui/toaster';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
      <Toaster />
    </ChakraProvider>
  );
}

export default MyApp;
