/* eslint-disable react/jsx-props-no-spreading */
import {
  Grid, GridItem, Stat, Flex, Box,
} from '@chakra-ui/react';
import PanelHeader from './ui/PanelHeader';

export default function DataPanel({
  note, pitchbend, encoder, midiData,
}) {
  // pitch bend arrives as -1..1; show it as a 0..100% fill.
  const pbPct = Math.max(0, Math.min(100, Number(((pitchbend * 50) + 50).toFixed(0))));

  const valStyle = {
    fontFamily: 'heading',
    color: 'custom.900',
    bg: 'custom.100',
    boxShadow: 'inner',
    textAlign: 'center',
    rounded: 'md',
    py: '2px',
    lineHeight: '1.4',
  };

  return (
    <>
      <PanelHeader>Data Panel</PanelHeader>
      <Box flex="1" minH="0" px={5} pt={2} pb={3}>
        <Grid templateColumns="1fr 44px" templateRows="repeat(3, 1fr)" columnGap={3} rowGap={2} h="100%" alignItems="center">
          <GridItem colStart={1} rowStart={1}>
            <Stat.Root gap={0}>
              <Stat.ValueText {...valStyle} fontSize="lg">{note}</Stat.ValueText>
              <Stat.Label color="custom.900" fontSize="xs">Note Played</Stat.Label>
            </Stat.Root>
          </GridItem>
          <GridItem colStart={1} rowStart={2}>
            <Stat.Root gap={0}>
              <Stat.ValueText {...valStyle} fontSize="lg">{(encoder * 100).toFixed(0)}</Stat.ValueText>
              <Stat.Label color="custom.900" fontSize="xs">Encoder Value</Stat.Label>
            </Stat.Root>
          </GridItem>
          <GridItem colStart={1} rowStart={3}>
            <Stat.Root gap={0}>
              <Stat.ValueText {...valStyle} fontSize="md">{midiData}</Stat.ValueText>
              <Stat.Label color="custom.900" fontSize="xs">Midi Value</Stat.Label>
            </Stat.Root>
          </GridItem>
          <GridItem colStart={2} rowStart={1} rowEnd={4} h="100%">
            <Flex direction="column" align="center" h="100%" gap={1} py={1}>
              <Box position="relative" flex="1" w="22px" bg="custom.100" boxShadow="inner" rounded="md" overflow="hidden">
                <Box position="absolute" bottom="0" left="0" right="0" h={`${pbPct}%`} bg="custom.500" transition="height 0.08s linear" />
              </Box>
              <Box as="span" fontSize="xs" color="custom.900" lineHeight="1.4">Bend</Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
