import { Box, Skeleton } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import PanelHeader from './ui/PanelHeader';
import { useColorMode } from './ui/color-mode';

const canvasWidth = 516;
const canvasHeight = 246;

// Canvas can't read Chakra tokens, so keep these in sync with custom.graph.
const STROKE = { light: '#B83A8C', dark: '#36E0E0' };

export default function Graph({ synth }) {
  const canvas = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!synth) {
      return undefined;
    }

    const context = canvas.current.getContext('2d');
    const strokeStyle = STROKE[colorMode] || STROKE.light;
    let frameId;

    function draw() {
      frameId = requestAnimationFrame(draw);
      const waveArray = synth.wave.getValue();
      context.lineWidth = 2.5;
      context.lineJoin = 'round';

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      waveArray.forEach((element, index) => {
        const x = (index / waveArray.length) * canvasWidth;
        context.lineTo(x, (canvasHeight / 2) + (500 * waveArray[index]));
      });
      context.strokeStyle = strokeStyle;
      context.stroke();
    }

    draw();

    // Stop the previous animation loop before a new synth starts its own,
    // and on unmount. Without this, every re-render stacked another rAF loop.
    return () => cancelAnimationFrame(frameId);
  }, [synth, colorMode]);

  return (
    <>
      <PanelHeader>Graph</PanelHeader>
      <Box flex="1" minH="0" px={4} pb={4} pt={1}>
        <Skeleton h="100%" w="100%" rounded="lg" loading={!synth}>
          <Box h="100%" w="100%" bg="custom.200" boxShadow="inner" rounded="lg" overflow="hidden">
            <canvas
              width={canvasWidth}
              height={canvasHeight}
              ref={canvas}
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          </Box>
        </Skeleton>
      </Box>
    </>
  );
}
