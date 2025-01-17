import React from "react";
import { Box } from "@chakra-ui/react";

import { ThemedSiderV2 as DefaultSider } from "./sider";
import { ThemedHeaderV2 as DefaultHeader } from "./header";
import { RefineThemedLayoutV2Props } from "./types";
import { ThemedLayoutContextProvider } from "../../contexts";

export const ThemedLayoutV2: React.FC<RefineThemedLayoutV2Props> = ({
    Sider,
    Header,
    Title,
    Footer,
    OffLayoutArea,
    children,
}) => {
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;

    return (
        <ThemedLayoutContextProvider>
            <Box display="flex">
                <SiderToRender Title={Title} />
                <Box
                    display="flex"
                    flexDirection="column"
                    flex={1}
                    overflow="hidden"
                    minH="100vh"
                >
                    <HeaderToRender />
                    <Box p={[2, 4]}>{children}</Box>
                    {Footer && <Footer />}
                </Box>
                {OffLayoutArea && <OffLayoutArea />}
            </Box>
        </ThemedLayoutContextProvider>
    );
};
