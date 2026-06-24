import { Box, Skeleton } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const canvasWidth = 516;
const canvasHeight = 246;

export default function Graph({ synth }) {
  const canvas = useRef(null);

  useEffect(() => {
    if (!synth) {
      return undefined;
    }

    const context = canvas.current.getContext('2d');
    let frameId;

    function draw() {
      frameId = requestAnimationFrame(draw);
      const waveArray = synth.wave.getValue();
      context.lineWidth = 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      waveArray.forEach((element, index) => {
        const x = (index / waveArray.length) * canvasWidth;
        context.lineTo(x, (canvasHeight - 150) + (500 * waveArray[index]));
      });
      context.strokeStyle = '#ae5cb2';
      context.stroke();
    }

    draw();

    // Stop the previous animation loop before a new synth starts its own,
    // and on unmount. Without this, every re-render stacked another rAF loop.
    return () => cancelAnimationFrame(frameId);
  }, [synth]);

  return (
    <Box>
      <Box
        textColor="custom.900"
        fontSize="lg"
        alignItems="center"
        justifyContent="center"
        display="flex"
        height={8}
        bg="custom.100"
        roundedBottom="lg"
        w={210}
        boxShadow="lg"
        transform="translate(+22px, 0px)"
      >
        Graph
      </Box>
      <Skeleton height={190} width={canvasWidth} rounded="lg" loading={!synth}>
        <canvas width={canvasWidth} height={canvasHeight} ref={canvas} />
      </Skeleton>
    </Box>
  );
}
