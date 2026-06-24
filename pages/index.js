import Head from 'next/head';

import { Center, Button, Link, Heading, VStack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>InSynth</title>
        <meta name="A Web Synth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center height="100vh" flexDirection="column" bg="custom.background" pt={32}>
        <Heading fontSize="6xl" color="custom.900">
          InSynth
        </Heading>
        <Text color="custom.600" pb={32} fontSize="2xl">
          a midi and keyboard controllable synthesizer.
        </Text>
        <VStack gap={2} align="center">
          <Link href="/synth">
            <Button colorPalette="custom" rounded="full" px={6} size="lg">
              Get Started
            </Button>
          </Link>

          <Link href="/about">
            <Button variant='plain' colorPalette="blue" size="sm">
              Learn more
            </Button>
          </Link>

        </VStack>
      </Center>
    </>
  );
}
