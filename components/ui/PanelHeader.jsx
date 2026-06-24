/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@chakra-ui/react';

// Inset "island" panel title with a rounded bottom, in the heading font.
export default function PanelHeader({ children, ...rest }) {
  return (
    <Box
      as="h2"
      flex="0 0 auto"
      alignSelf="center"
      bg="custom.100"
      color="custom.900"
      fontFamily="heading"
      fontWeight="600"
      fontSize="md"
      lineHeight="1.6"
      letterSpacing="-0.01em"
      whiteSpace="nowrap"
      px="6"
      py="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      roundedBottom="xl"
      boxShadow="md"
      {...rest}
    >
      {children}
    </Box>
  );
}
