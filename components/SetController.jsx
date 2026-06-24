/* eslint-disable react/jsx-no-bind */
import {
  NativeSelect,
  Box,
  Input,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PanelHeader from './ui/PanelHeader';

const clamp = (v) => Math.max(1, Math.min(16, v));

export default function SetController({ setInput, setChannel, inputList }) {
  const [channel, setLocalChannel] = useState(1);

  useEffect(() => {
    setChannel(channel);
  }, [channel, setChannel]);

  function changeInput(e) {
    setInput((e.target.value).toString());
  }

  function handleType(e) {
    const v = parseInt(e.target.value, 10);
    setLocalChannel(Number.isNaN(v) ? 1 : clamp(v));
  }

  return (
    <>
      <PanelHeader>Set Controller</PanelHeader>
      <Box id="setcontroller" flex="1" minH="0">
        <Flex direction="column" justify="center" gap={4} h="100%" px={5}>
          <NativeSelect.Root>
            <NativeSelect.Field
              color="custom.900"
              borderColor="custom.300"
              colorPalette="custom"
              placeholder="Select Controller"
              onChange={changeInput}
            >
              {inputList.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
          <HStack>
            <Button colorPalette="custom" size="lg" onClick={() => setLocalChannel((c) => clamp(c - 1))}>-</Button>
            <Input
              color="custom.900"
              borderColor="custom.300"
              textAlign="center"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="600"
              size="lg"
              value={channel}
              onChange={handleType}
            />
            <Button colorPalette="custom" size="lg" onClick={() => setLocalChannel((c) => clamp(c + 1))}>+</Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
