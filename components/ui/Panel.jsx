/* eslint-disable react/jsx-props-no-spreading */
import { GridItem } from '@chakra-ui/react';

// Surface card for a synth module; lays out a PanelHeader + body as a column.
export default function Panel({ children, ...rest }) {
  return (
    <GridItem
      position="relative"
      bg="custom.50"
      borderWidth="1px"
      borderColor="custom.100"
      rounded="2xl"
      boxShadow="2xl"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      {...rest}
    >
      {children}
    </GridItem>
  );
}
