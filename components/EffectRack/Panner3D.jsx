import {
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react';
import EffectSlider from '../ui/EffectSlider';
import EffectSwitch from '../ui/EffectSwitch';

import { useState } from 'react';

export default function Panner3D({ synth }) {
  const [toggle, setToggle] = useState('');
  const [positionX, setX] = useState(0);
  const [positionY, setY] = useState(0);
  const [positionZ, setZ] = useState(0);

  function handleClick() {
    if (toggle) {
      synth.Panner3D.set({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        panningModel: 'HRTF',
      });
      synth.chainEffects();
      setToggle(false);
    } else {
      synth.Panner3D.set({
        positionX,
        positionY,
        positionZ,
      });
      synth.chainEffects();
      setToggle(true);
    }
  }

  function handleX(e) {
    if (!toggle) {
      setToggle(true);
    }
    setX(e);
    synth.Panner3D.set({
      positionX: e,
    });
    synth.chainEffects();
  }
  function handleY(e) {
    if (!toggle) {
      setToggle(true);
    }
    setY(e);
    synth.Panner3D.set({
      positionY: e,
    });
    synth.chainEffects();
  }
  function handleZ(e) {
    if (!toggle) {
      setToggle(true);
    }
    setZ(e);
    synth.Panner3D.set({
      positionZ: e,
    });
    synth.chainEffects();
  }

  return (
    <div id="panner3d">
      <Flex direction="column" boxShadow="md" bg="custom.100" rounded="lg" width="90%" display="flex" margin="auto" p={4}>
        <Box textColor="custom.900" textAlign="center">Panner3D Effect</Box>
        <EffectSwitch mt={1} colorPalette="custom" textAlign="center" onToggle={handleClick} checked={toggle} />
        <Box textColor="custom.900" textAlign="left" fontSize="sm">X</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={-10} max={10} step={0.1} onChange={handleX} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">{positionX}</Box>
        </HStack>
        <Box textColor="custom.900" textAlign="left" fontSize="sm">Y</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={-10} max={10} onChange={handleY} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">
            {positionY}
          </Box>
        </HStack>

        <Box textColor="custom.900" textAlign="left" fontSize="sm">Z</Box>
        <HStack>
          <EffectSlider colorPalette="custom" aria-label="slider-ex-1" flexGrow="1" defaultValue={0} min={-10} max={10} onChange={handleZ} />
          <Box textColor="custom.900" bg="custom.200" boxShadow="inner" textAlign="center" rounded="base" width="20%">
            {positionZ}
          </Box>
        </HStack>
      </Flex>
    </div>
  );
}
