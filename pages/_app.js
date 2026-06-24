/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Fraunces, Syne } from "next/font/google";
import system from "../styles/theme";
import { Toaster } from "../components/ui/toaster";
import { ColorModeProvider } from "../components/ui/color-mode";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  // Expose the font vars on <body> too, so portalled UI (toasts) inherits them.
  useEffect(() => {
    document.body.classList.add(fraunces.variable, syne.variable);
  }, []);

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <div
          className={`${fraunces.variable} ${syne.variable}`}
          style={{
            display: "contents",
            fontFamily: "var(--font-syne), system-ui, sans-serif",
          }}
        >
          <Component {...pageProps} />
        </div>
        <Toaster />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
