import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem, AccordionPanel,
  Box,
  Center,
  Heading,
  Container, Kbd, UnorderedList, ListItem,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - InSynth</title>
        <meta name="A Web Synth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container bg="custom.background" maxWidth="100%" minH="100vh">
        <Heading fontSize="6xl" color="custom.900" textAlign="center" paddingTop="150px" mb={16}>
          About this Project
        </Heading>
        <Center flexDirection="column" width="100%">
          <Box width="50%" maxW="50rem" bg="custom.200" py="10px" mb={16} px={1} boxShadow="2xl" rounded="2xl">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'custom.200', color: 'custom.900' }}>
                    <Box flex="1" textAlign="left">
                      Why Was This Created?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  This project was mostly made as a learning tool for ReactJS, NextJS, Chakra UI,
                  Cypress, WebMidi, ToneJS and others.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'custom.200', color: 'custom.900' }}>
                    <Box flex="1" textAlign="left">
                      Usage with Midi Controllers
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  Using a midi controller is relatively straightforward. First, make sure your
                  browser support the Midi standard (
                  <Box
                    textDecoration="underline"
                    textColor="custom.600"
                    as="a"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#browser_compatibility"
                  >
                    check here
                  </Box>
                  ). Then plug your midi controller in, (your browser may prompt you to enable Midi
                  access). Then select it in the drop down menu in the &apos;Set Controller&apos;
                  panel. You may need to reload the page after plugging in your controller.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'custom.200', color: 'custom.900' }}>
                    <Box flex="1" textAlign="left">
                      Usage with Keyboard
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  If you do not have a midi controller, or a compatible browser, you can still use
                  the web synthesizer. Using the keys:
                  {' '}
                  <Kbd>a</Kbd>
                  {' '}
                  <Kbd>s</Kbd>
                  {' '}
                  <Kbd>d</Kbd>
                  {' '}
                  <Kbd>f</Kbd>
                  {' '}
                  <Kbd>g</Kbd>
                  {' '}
                  <Kbd>h</Kbd>
                  {' '}
                  <Kbd>j</Kbd>
                  {' '}
                  <Kbd>k</Kbd>
                  {' '}
                  ,
                  you can emulate the keys C4 to B5 on a real piano. Avoid modifying effects while
                  playing or playing multiple keys quickly as this is currently quite buggy!
                  <br />
                  In order to view each effect more clearly on the graph, use keys:
                  {' '}
                  <Kbd>i</Kbd>
                  {' '}
                  <Kbd>o</Kbd>
                  {' '}
                  <Kbd>p</Kbd>
                  {' '}
                  as the frequency matches the framerate of the graph, making it appear as if it
                  is not moving.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'custom.200', color: 'custom.900' }}>
                    <Box flex="1" textAlign="left">
                      Currently Known Bugs
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  Although frontend testing has been done using Cypress, there are some bugs that
                  are present in the current build.
                  <br />
                  <br />
                  <UnorderedList>
                    <ListItem>
                      Using a keyboard, keys can sometimes stay on even after letting go.
                    </ListItem>
                    <ListItem>Playing too many keys, too quickly can reduce performance.</ListItem>
                    <ListItem>
                      Changing channel creates a new synth, rather than change the current
                      one, leading to overlapping noise.
                    </ListItem>
                    <ListItem>
                      Changing from one synth to another (FM-&gt;AM or AM-&gt;FM) resets all
                      effects.
                    </ListItem>
                    <ListItem>
                      Holding down a key on Linux using Firefox causes the Key Down event
                      to keep firing.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: 'custom.200', color: 'custom.900' }}>
                    <Box flex="1" textAlign="left">
                      Where to Find the Source Code
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  The source code for this project is currently hosted
                  {' '}
                  <Box
                    textDecoration="underline"
                    textColor="custom.600"
                    as="a"
                    href="https://github.com/Satrumidium/InSynth"
                  >
                    here
                  </Box>
                  . If you find any bugs or have feature requests, please create a new issue there.
                  Please keep in mind this is a simple side project so there is no guarantee your
                  issue will be seen or acted on. If you would like to build this project yourself,
                  please follow the instructions in the link above.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Center>
      </Container>
    </>
  );
}
