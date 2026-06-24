/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconButton } from '@chakra-ui/react';

// next-themes manages the `.dark` class on <html>, which Chakra's `_dark`
// tokens read. Dark is the default; the choice persists in localStorage.
export function ColorModeProvider(props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="insynth-color-mode"
      {...props}
    />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  return { colorMode: resolvedTheme, setColorMode: setTheme, toggleColorMode };
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
    </svg>
  );
}

export function ColorModeToggle(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  // The theme is unknown during SSR/first render; wait until mounted to pick an
  // icon so the markup matches and there's no hydration warning.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleColorMode}
      variant="ghost"
      colorPalette="custom"
      color="custom.900"
      rounded="full"
      size="md"
      {...props}
    >
      {mounted ? (colorMode === 'dark' ? <SunIcon /> : <MoonIcon />) : null}
    </IconButton>
  );
}
