import { Box } from '@chakra-ui/react';

export default function DataPanel({
  note, pitchbend, encoder, midiData,
}) {
  return (
    <Box>
      <h1>Data Panel</h1>
      <h1>{note}</h1>
      <h1>{(pitchbend * 100).toFixed(0)}</h1>
      <h1>{(encoder * 100).toFixed(0)}</h1>
      <h1>{midiData}</h1>
    </Box>
  );
}
