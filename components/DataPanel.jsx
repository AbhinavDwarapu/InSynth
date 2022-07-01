import {
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Progress,
} from '@chakra-ui/react';

export default function DataPanel({
  note, pitchbend, encoder, midiData,
}) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)" m={4}>
      <GridItem colStart={1} colEnd={3} rowSpan={1} rowStart={1} textAlign="center">

        <Text fontSize="3xl">Data Panel</Text>

      </GridItem>

      <GridItem colStart={1} rowSpan={1} rowStart={2}>

        <Stat>
          <StatNumber fontSize="xl" bg="gray.100" boxShadow="inner" textAlign="center">{note}</StatNumber>
          <StatLabel color="gray.500">Note Played</StatLabel>
        </Stat>
      </GridItem>
      <GridItem colStart={1} rowSpan={1} rowStart={3}>
        <Stat>
          <StatNumber fontSize="xl" bg="gray.100" boxShadow="inner" textAlign="center">{(encoder * 100).toFixed(0)}</StatNumber>
          <StatLabel color="gray.500">Encoder Value</StatLabel>
        </Stat>
      </GridItem>
      <GridItem colStart={1} rowSpan={1} rowStart={4}>
        <Stat>
          <StatNumber fontSize="xl" bg="gray.100" boxShadow="inner" textAlign="center">{midiData}</StatNumber>
          <StatLabel color="gray.500">Midi Value</StatLabel>
        </Stat>
      </GridItem>
      <GridItem colStart={2} rowStart={2} rowEnd={4}>
        <Stat>
          <Progress transform="rotate(-90deg) translate(-50px, 3px)" height="32px" boxShadow="inner" value={((pitchbend * 50) + 50).toFixed(0)} />
        </Stat>
      </GridItem>
      <GridItem colStart={2} rowStart={5} rowEnd={5} position="relative">
        <Stat>
          <StatLabel position="absolute" bottom="0" right="5" color="gray.500">Pitch Bend</StatLabel>
        </Stat>
      </GridItem>
    </Grid>

  );
}
