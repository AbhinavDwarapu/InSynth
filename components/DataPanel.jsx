import {
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
  Flex,
  Box,
} from '@chakra-ui/react';

export default function DataPanel({
  note, pitchbend, encoder, midiData,
}) {
  return (
    <Flex direction="column" width={256} height={256}>
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(3, 1fr)" m={4} mt={8} ml={8} flexGrow="1">

        <GridItem colStart={1} rowSpan={1} rowStart={1}>
          <Stat>
            <StatNumber textColor="custom.900" fontSize="lg" bg="custom.100" boxShadow="inner" textAlign="center" rounded="base">{note}</StatNumber>
            <StatLabel color="custom.900">Note Played</StatLabel>
          </Stat>
        </GridItem>
        <GridItem colStart={1} rowSpan={1} rowStart={2}>
          <Stat>
            <StatNumber textColor="custom.900" fontSize="lg" bg="custom.100" boxShadow="inner" textAlign="center" rounded="base">{(encoder * 100).toFixed(0)}</StatNumber>
            <StatLabel color="custom.900">Encoder Value</StatLabel>
          </Stat>
        </GridItem>
        <GridItem colStart={1} rowSpan={1} rowStart={3}>
          <Stat>
            <StatNumber textColor="custom.900" fontSize="lg" bg="custom.100" boxShadow="inner" textAlign="center" rounded="base">{midiData}</StatNumber>
            <StatLabel color="custom.900">Midi Value</StatLabel>
          </Stat>
        </GridItem>
        <GridItem colStart={2} rowStart={1} rowEnd={3}>
          <Stat>
            <Progress colorScheme="custom" bg="custom.100" transform="rotate(-90deg) translate(-54px, 3.5px) scale(1.35, 1)" height="32px" boxShadow="inner" rounded="base" value={((pitchbend * 50) + 50).toFixed(0)} />
          </Stat>
        </GridItem>
        <GridItem colStart={2} rowStart={5} rowEnd={5} position="relative">
          <Stat>
            <StatLabel position="absolute" bottom="2" right="3.5" color="custom.900">Pitch Bend</StatLabel>
          </Stat>
        </GridItem>
      </Grid>
      <Box textColor="custom.900" fontSize="lg" alignItems="center" justifyContent="center" display="flex" height={8} bg="custom.100" roundedTop="lg" w={210} transform="translate(+24px)">Data Panel</Box>
    </Flex>
  );
}
