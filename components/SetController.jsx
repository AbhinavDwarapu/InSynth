/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
import {
  Select,
  useNumberInput,
  Grid,
  GridItem,
  Text,
  Input,
  HStack,
  Button,
} from '@chakra-ui/react';

export default function SetController({ setInput, setChannel, inputList }) {
  const jsx = [];
  inputList.forEach((name) => {
    jsx.push(<option key={name}>{name}</option>);
  });

  function changeInput(e) {
    setInput((e.target.value).toString());
  }

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 16,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  setChannel(input.value);

  return (
    <Grid>
      <GridItem textAlign="center" mt={4} mb={4}>
        <Text fontSize="3xl">Set Controller</Text>
      </GridItem>
      <GridItem>
        <Select onClick={changeInput} placeholder="Select Controller" width={56} m="auto">
          {jsx}
        </Select>
      </GridItem>
      <GridItem>
        <HStack maxW="255px" p={4}>
          <Button {...dec}>-</Button>
          <Input {...input} />
          <Button {...inc}>+</Button>
        </HStack>
      </GridItem>
    </Grid>

  );
}
