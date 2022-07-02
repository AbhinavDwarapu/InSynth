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
            <StatNumber fontSize="lg" bg="gray.100" boxShadow="inner" textAlign="center">{note}</StatNumber>
            <StatLabel color="gray.500">Note Played</StatLabel>
          </Stat>
        </GridItem>
        <GridItem colStart={1} rowSpan={1} rowStart={2}>
          <Stat>
            <StatNumber fontSize="lg" bg="gray.100" boxShadow="inner" textAlign="center">{(encoder * 100).toFixed(0)}</StatNumber>
            <StatLabel color="gray.500">Encoder Value</StatLabel>
          </Stat>
        </GridItem>
        <GridItem colStart={1} rowSpan={1} rowStart={3}>
          <Stat>
            <StatNumber fontSize="lg" bg="gray.100" boxShadow="inner" textAlign="center">{midiData}</StatNumber>
            <StatLabel color="gray.500">Midi Value</StatLabel>
          </Stat>
        </GridItem>
        <GridItem colStart={2} rowStart={1} rowEnd={3}>
          <Stat>
            <Progress transform="rotate(-90deg) translate(-54px, 3px) scale(1.35, 1)" height="32px" boxShadow="inner" value={((pitchbend * 50) + 50).toFixed(0)} />
          </Stat>
        </GridItem>
        <GridItem colStart={2} rowStart={5} rowEnd={5} position="relative">
          <Stat>
            <StatLabel position="absolute" bottom="0" right="5" color="gray.500">Pitch Bend</StatLabel>
          </Stat>
        </GridItem>
      </Grid>
      <Box fontSize="lg" alignItems="center" justifyContent="center" display="flex" height={10} bg="gray.200" rounded="lg">Data Panel</Box>
    </Flex>
  );
}
