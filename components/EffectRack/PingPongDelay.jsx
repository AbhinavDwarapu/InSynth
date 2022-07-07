import {
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Box,
  HStack,
} from '@chakra-ui/react';

import { useState } from 'react';

export default function PingPongDelay({ synth }) {
  const [toggle, setToggle] = useState('');
  const [feedback, setFeedback] = useState(0);
  const [delay, setDelay] = useState(0);

  function handleClick(e) {
    if (toggle) {
      synth.PingPongDelay.set({
        wet: 0,
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.PingPongDelay.set({
        wet: e.target.checked,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleFeedback(e) {
    if (!toggle) {
      setToggle(true);
    }
    setFeedback(e);
    synth.PingPongDelay.set({
      wet: 1,
      feedback: e,
    });
    synth.chainEffects();
  }

  function handleDelay(e) {
    if (!toggle) {
      setToggle(true);
    }
    setDelay(e);
    synth.PingPongDelay.set({
      wet: 1,
      delay: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="pingpongdelay">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">PingPong Delay Effect</Box>
        <Switch mt={1} colorScheme="custom" onChange={handleClick} isChecked={toggle} textAlign="center" />

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Feedback</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={1} step={0.05} onChange={handleFeedback}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{feedback}</Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Delay</Box>
        <HStack>
          <Slider colorScheme="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={0} max={10} onChange={handleDelay}>
            <SliderTrack bg="custom.50">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{delay}</Box>
        </HStack>
      </Flex>
    </div>
  );
}
