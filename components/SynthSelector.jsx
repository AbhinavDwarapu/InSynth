/* eslint-disable react/jsx-no-bind */
import {
  Button, Flex, Box, VStack,
} from '@chakra-ui/react';

import { useState } from 'react';
import PanelHeader from './ui/PanelHeader';

export default function SynthSelector({
  synth,
}) {
  const [AMSynth, setAMSynth] = useState(true);

  function changeSynth(e) {
    const name = (e.currentTarget.textContent || '').trim();
    synth.synthInit(name);
    synth.chainEffects();
    setAMSynth(name === 'AMSynth');
  }

  return (
    <>
      <PanelHeader>Select Synth</PanelHeader>
      <Box id="synthselector" flex="1" minH="0">
        <Flex direction="column" justify="center" align="center" h="100%">
          <VStack gap={3}>
            <Button colorPalette="custom" variant={AMSynth ? 'solid' : 'subtle'} rounded="lg" data-active={AMSynth ? '' : undefined} onClick={changeSynth} width={44}>
              AMSynth
            </Button>
            <Button colorPalette="custom" variant={!AMSynth ? 'solid' : 'subtle'} rounded="lg" data-active={!AMSynth ? '' : undefined} onClick={changeSynth} width={44}>
              FMSynth
            </Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}
