import { Box, Skeleton } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import PanelHeader from './ui/PanelHeader';
import { useColorMode } from './ui/color-mode';

const canvasWidth = 516;
const canvasHeight = 246;

// Canvas can't read Chakra tokens, so keep these in sync with custom.graph.
const STROKE = { light: '#B83A8C', dark: '#36E0E0' };

// First rising zero-crossing in [0, maxStart], or 0 if there isn't one.
function risingZeroCrossing(buffer, maxStart) {
  for (let i = 0; i < maxStart; i += 1) {
    if (buffer[i] <= 0 && buffer[i + 1] > 0) return i;
  }
  return 0;
}

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

    const sampleRate = synth.wave.context.sampleRate || 44100;

    function draw() {
      frameId = requestAnimationFrame(draw);
      const buffer = synth.wave.getValue();
      const total = buffer.length;

      // Window the trace to a whole number of cycles of the played note, then
      // start it at a rising zero-crossing. Together these lock the waveform to
      // the note's frequency so its shape stays still instead of scrolling.
      let start = 0;
      let count = total;
      const { frequency } = synth;
      if (frequency > 0) {
        const samplesPerCycle = sampleRate / frequency;
        const cycles = Math.max(1, Math.min(3, Math.floor(total / samplesPerCycle)));
        count = Math.min(total, Math.round(samplesPerCycle * cycles));
        start = risingZeroCrossing(buffer, total - count);
      }

      context.lineWidth = 2.5;
      context.lineJoin = 'round';
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      for (let i = 0; i < count; i += 1) {
        const x = (i / count) * canvasWidth;
        context.lineTo(x, (canvasHeight / 2) + (500 * buffer[start + i]));
      }
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
