/* eslint-disable no-use-before-define */

import { Box, Skeleton } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const canvasWidth = 516;
const canvasHeight = 256;

export default function Graph({ synth }) {
  const [isLoading, setLoading] = useState(true);
  const canvas = useRef(null);
  let context;

  useEffect(() => {
    if (synth) {
      setLoading(false);
      context = canvas.current.getContext('2d');

      draw();
    } else {
      setLoading(true);
    }
  });

  function draw() {
    requestAnimationFrame(draw);
    const waveArray = synth.wave.getValue();
    context.lineWidth = 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.beginPath();
    waveArray.forEach((element, index) => {
      const x = (index / waveArray.length) * (canvasWidth);
      context.lineTo(x, (canvasHeight - 150) + (500 * waveArray[index]));
    });
    context.strokeStyle = '#ae5cb2';
    context.stroke();
  }

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
      <Skeleton startColor="custom.50" endColor="custom.200" fadeDuration={4} height={190} width={canvasWidth} rounded="lg" isLoaded={!isLoading}>
        <canvas width={canvasWidth} height={canvasHeight} ref={canvas} />
      </Skeleton>

    </Box>
  );
}
