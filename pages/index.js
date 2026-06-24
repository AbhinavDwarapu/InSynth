import Head from "next/head";

import {
  Box,
  Center,
  Button,
  Link,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { ColorModeToggle } from "../components/ui/color-mode";

export default function Home() {
  return (
    <>
      <Head>
        <title>InSynth</title>
        <meta name="A Web Synth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center
        position="relative"
        height="100vh"
        flexDirection="column"
        bg="custom.background"
      >
        <ColorModeToggle position="absolute" top={5} right={6} />

        <HStack
          mb={6}
          px={3}
          py={1.5}
          rounded="full"
          bg="custom.50"
          borderWidth="1px"
          borderColor="custom.accent/40"
          color="custom.accent"
        >
          <Box
            w="7px"
            h="7px"
            rounded="full"
            bg="custom.accent"
            boxShadow="0 0 8px var(--chakra-colors-custom-accent)"
          />
          <Text fontSize="sm" fontWeight="600">
            live · web audio
          </Text>
        </HStack>

        <Heading
          fontFamily="heading"
          fontSize="7xl"
          letterSpacing="-0.02em"
          color="custom.900"
          pb={4}
        >
          InSynth
        </Heading>
        <Text color="custom.600" pb={24} fontSize="2xl">
          a midi and keyboard controllable synthesizer.
        </Text>
        <VStack gap={2} align="center">
          <Link href="/synth">
            <Button colorPalette="custom" rounded="full" px={8} size="lg">
              Get Started
            </Button>
          </Link>

          <Link href="/about">
            <Button
              variant="plain"
              colorPalette="custom"
              color="custom.700"
              size="sm"
            >
              Learn more
            </Button>
          </Link>
        </VStack>
      </Center>
    </>
  );
}
