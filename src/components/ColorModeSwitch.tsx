import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack paddingRight={5}>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
