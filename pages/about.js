import {
  Accordion,
  Box,
  Center,
  Heading,
  Container,
  Kbd,
  Skeleton,
  List,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>About - InSynth</title>
        <meta name="A Web Synth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Skeleton loading={!!isLoading}>
        <Container bg="custom.background" maxWidth="100%" minH="100vh">
          <Heading fontSize="6xl" color="custom.900" textAlign="center" paddingTop="150px" mb={16}>
            About this Project
          </Heading>

          <Center flexDirection="column" width="100%">
              <Box width="50%" maxW="50rem" bg="custom.invbackground" py="10px" mb={16} px={1} boxShadow="2xl" rounded="3xl" borderColor="custom.300" borderWidth={1}>
                <Accordion.Root defaultValue={['item-0']} multiple>
                  <Accordion.Item borderColor="transparent" value='item-0'>
                    <h2>
                      <Accordion.ItemTrigger _expanded={{ bg: 'custom.400' }} rounded="xl">
                        <Box flex="1" textAlign="left">
                          Why Was This Created?
                        </Box>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent><Accordion.ItemBody>This project was mostly made as a learning tool for ReactJS, NextJS,
                                              Chakra UI, Cypress, WebMidi, ToneJS and others.
                                            </Accordion.ItemBody></Accordion.ItemContent>
                  </Accordion.Item>
                  <Accordion.Item borderColor="transparent" value='item-1'>
                    <h2>
                      <Accordion.ItemTrigger _expanded={{ bg: 'custom.400' }} rounded="xl">
                        <Box flex="1" textAlign="left">
                          Usage with Midi Controllers
                        </Box>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent><Accordion.ItemBody>Using a midi controller is relatively straightforward. First, make sure your
                                              browser support the Midi standard (
                                              <Box textDecoration="underline" textColor="custom.600" asChild><a
                                                href="https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#browser_compatibility">check here
                                                                        </a></Box>). Then plug your midi controller in, (your browser may prompt you to enable
                                              Midi access). Then select it in the drop down menu in the &apos;Set
                                              Controller&apos;panel. You may need to reload the page after plugging in your
                                              controller.
                                            </Accordion.ItemBody></Accordion.ItemContent>
                  </Accordion.Item>
                  <Accordion.Item borderColor="transparent" value='item-2'>
                    <h2>
                      <Accordion.ItemTrigger _expanded={{ bg: 'custom.400' }} rounded="xl">
                        <Box flex="1" textAlign="left">
                          Usage with Keyboard
                        </Box>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent><Accordion.ItemBody>If you do not have a midi controller, or a compatible browser, you can still
                                              use the web synthesizer. Using the keys:
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
                        {' '},
                                              you can emulate the keys C4 to B5 on a real piano. Avoid modifying effects
                                              while playing or playing multiple keys quickly as this is currently quite
                                              buggy!
                                              <br />In order to view each effect more clearly on the graph, use keys:
                                              {' '}
                        <Kbd>i</Kbd>
                        {' '}
                        <Kbd>o</Kbd>
                        {' '}
                        <Kbd>p</Kbd>
                        {' '}as the frequency matches the framerate of the graph, making it appear as if it
                                              is not moving.
                                            </Accordion.ItemBody></Accordion.ItemContent>
                  </Accordion.Item>
                  <Accordion.Item borderColor="transparent" value='item-3'>
                    <h2>
                      <Accordion.ItemTrigger _expanded={{ bg: 'custom.400' }} rounded="xl">
                        <Box flex="1" textAlign="left">
                          Currently Known Bugs
                        </Box>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent><Accordion.ItemBody>Although frontend testing has been done using Cypress, there are some bugs
                                              that are present in the current build.
                                              <br />
                        <br />
                        <List.Root as='ul'>
                          <List.Item>
                            Using a keyboard, keys can sometimes stay on even after letting go.
                          </List.Item>
                          <List.Item>
                            Playing too many keys, too quickly can reduce performance.
                          </List.Item>
                          <List.Item>
                            Changing channel creates a new synth, rather than change the current
                            one, leading to overlapping noise.
                          </List.Item>
                          <List.Item>
                            Changing from one synth to another (FM-&gt;AM or AM-&gt;FM) resets all
                            effects.
                          </List.Item>
                          <List.Item>
                            Holding down a key on Linux using Firefox causes the Key Down event
                            to keep firing.
                          </List.Item>
                        </List.Root>
                      </Accordion.ItemBody></Accordion.ItemContent>
                  </Accordion.Item>
                  <Accordion.Item borderColor="transparent" value='item-4'>
                    <h2>
                      <Accordion.ItemTrigger _expanded={{ bg: 'custom.400' }} rounded="xl">
                        <Box flex="1" textAlign="left">
                          Where to Find the Source Code
                        </Box>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                    </h2>
                    <Accordion.ItemContent><Accordion.ItemBody>The source code for this project is currently hosted
                                              {' '}
                        <Box textDecoration="underline" textColor="custom.600" asChild><a href="https://github.com/Satrumidium/InSynth">here
                                                  </a></Box>. If you find any bugs or have feature requests, please create a new issue
                                              there. Please keep in mind this is a simple side project so there is no
                                              guarantee your issue will be seen or acted on. If you would like to build this
                                              project yourself, please follow the instructions in the link above.
                                            </Accordion.ItemBody></Accordion.ItemContent>
                  </Accordion.Item>
                </Accordion.Root>
              </Box>

          </Center>

        </Container>
      </Skeleton>
    </>
  );
}
