/* eslint-disable react/jsx-props-no-spreading */
import { Box, Flex, Link } from '@chakra-ui/react';

// Corner wordmark that links home.
export default function Brandmark({ size = '2xl', ...rest }) {
  return (
    <Link href="/" _hover={{ textDecoration: 'none' }} {...rest}>
      <Flex align="center" gap="2.5">
        <Box
          w="11px"
          h="11px"
          rounded="full"
          bg="custom.accent"
          boxShadow="0 0 10px var(--chakra-colors-custom-accent)"
        />
        <Box
          as="span"
          fontFamily="heading"
          fontWeight="700"
          fontSize={size}
          letterSpacing="-0.02em"
          color="custom.900"
        >
          InSynth
        </Box>
      </Flex>
    </Link>
  );
}
