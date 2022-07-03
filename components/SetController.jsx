/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
import {
  Select,
  useNumberInput,
  Grid,
  GridItem,
  Box,
  Input,
  HStack,
  Button,
  Flex,
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
    <Flex direction="column" width={256} height={256}>
      <Box textColor="custom.900" fontSize="lg" alignItems="center" justifyContent="center" display="flex" height={8} bg="custom.100" roundedBottom="lg" w={210} transform="translate(+22px, 0px)">Set Controler</Box>
      <Grid textAlign="center" flexGrow="1">
        <GridItem margin="auto" mb={2}>
          <Select textColor="custom.900" borderColor="custom.100" colorScheme="custom" onClick={changeInput} placeholder="Select Controller" width={56} m="auto">
            {jsx}
          </Select>
        </GridItem>
        <GridItem margin="auto" mt={2}>
          <HStack maxW="255px" pl={4} pr={4}>
            <Button {...dec} colorScheme="custom">-</Button>
            <Input textColor="custom.900" borderColor="custom.100" {...input} />
            <Button {...inc} colorScheme="custom">+</Button>
          </HStack>
        </GridItem>
      </Grid>

    </Flex>

  );
}
