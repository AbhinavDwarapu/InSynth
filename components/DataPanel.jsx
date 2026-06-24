import { Grid, GridItem, Stat, Progress, Flex, Box } from '@chakra-ui/react';

export default function DataPanel({
  note, pitchbend, encoder, midiData,
}) {
  return (
    <Flex direction="column" width={256} height={256}>
      <Box
        textColor="custom.900"
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
        Data Panel
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(3, 1fr)" m={4} mt={8} ml={8} flexGrow="1">

        <GridItem colStart={1} rowSpan={1} rowStart={1}>
          <Stat.Root>
            <Stat.ValueText textColor="custom.900" fontSize="lg" bg="custom.100" boxShadow="inner" textAlign="center" rounded="base">{note}</Stat.ValueText>
            <Stat.Label color="custom.900">Note Played</Stat.Label>
          </Stat.Root>
        </GridItem>
        <GridItem colStart={1} rowSpan={1} rowStart={2}>
          <Stat.Root>
            <Stat.ValueText textColor="custom.900" fontSize="lg" bg="custom.100" boxShadow="inner" textAlign="center" rounded="base">{(encoder * 100).toFixed(0)}</Stat.ValueText>
            <Stat.Label color="custom.900">Encoder Value</Stat.Label>
          </Stat.Root>
        </GridItem>
        <GridItem colStart={1} rowSpan={1} rowStart={3}>
          <Stat.Root>
            <Stat.ValueText textColor="custom.900" fontSize="lg" bg="custom.100" boxShadow="inner" textAlign="center" rounded="base">{midiData}</Stat.ValueText>
            <Stat.Label color="custom.900">Midi Value</Stat.Label>
          </Stat.Root>
        </GridItem>
        <GridItem colStart={2} rowStart={1} rowEnd={3}>
          <Stat.Root>
            <Progress.Root
              colorPalette="custom"
              bg="custom.100"
              transform="rotate(-90deg) translate(-54px, 3.5px) scale(1.35, 1)"
              height="32px"
              boxShadow="inner"
              rounded="base"
              value={Number(((pitchbend * 50) + 50).toFixed(0))}>
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </Stat.Root>
        </GridItem>
        <GridItem colStart={2} rowStart={5} rowEnd={5} position="relative">
          <Stat.Root>
            <Stat.Label position="absolute" bottom="2" right="3.5" color="custom.900">Pitch Bend</Stat.Label>
          </Stat.Root>
        </GridItem>
      </Grid>
    </Flex>
  );
}
