/* eslint-disable react/jsx-no-bind */
import {
  Box,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export default function SetController({ setInput, setChannel, inputList }) {
  const jsx = [];
  inputList.forEach((name) => {
    jsx.push(<option key={name}>{name}</option>);
  });

  function changeInput(e) {
    setInput((e.target.value).toString());
  }
  function changeChannel(e) {
    setChannel(e);
  }

  return (
    <Box>
      <h1>Set Controller</h1>
      <Select onClick={changeInput} placeholder="Select Controller">
        {jsx}
      </Select>
      <NumberInput
        defaultValue={1}
        min={1}
        max={16}
        onChange={changeChannel}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

    </Box>
  );
}
