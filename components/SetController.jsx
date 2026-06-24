/* eslint-disable react/jsx-no-bind */
import {
  NativeSelect,
  Grid,
  GridItem,
  Box,
  Input,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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
    <div id="setcontroller">
      <Flex direction="column" width={256} height={256}>
        <Box
          color="custom.900"
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
          Set Controller
        </Box>
        <Grid textAlign="center" flexGrow="1">
          <GridItem margin="auto" mb={2}>
            <NativeSelect.Root width={56} m="auto">
              <NativeSelect.Field
                color="custom.900"
                borderColor="custom.100"
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
          </GridItem>
          <GridItem margin="auto" mt={2}>
            <HStack maxW="255px" pl={4} pr={4}>
              <Button colorPalette="custom" onClick={() => setLocalChannel((c) => clamp(c - 1))}>-</Button>
              <Input color="custom.900" borderColor="custom.100" value={channel} onChange={handleType} />
              <Button colorPalette="custom" onClick={() => setLocalChannel((c) => clamp(c + 1))}>+</Button>
            </HStack>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
}
