import { HamburgerMenu } from "@refinedev/chakra-ui";
import { Box, IconButton, Icon, useColorMode } from "@chakra-ui/react";
import { IconMoon, IconSun } from "@tabler/icons";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            py="2"
            px="4"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="full"
            bg="chakra-body-bg"
        >
            <HamburgerMenu />
            <IconButton
                variant="ghost"
                aria-label="Toggle theme"
                onClick={toggleColorMode}
            >
                <Icon
                    as={colorMode === "light" ? IconMoon : IconSun}
                    w="18px"
                    h="18px"
                />
            </IconButton>
        </Box>
    );
};
