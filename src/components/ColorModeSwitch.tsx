import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Text>Dark Mode</Text>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
        </HStack>
    );
}

export default ColorModeSwitch;
