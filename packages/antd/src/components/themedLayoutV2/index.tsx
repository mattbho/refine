import React from "react";
import { Grid, Layout as AntdLayout } from "antd";

import { ThemedSiderV2 as DefaultSider } from "./sider";
import { ThemedHeaderV2 as DefaultHeader } from "./header";
import { RefineThemedLayoutV2Props } from "./types";
import { ThemedLayoutContextProvider } from "@contexts";

export const ThemedLayoutV2: React.FC<RefineThemedLayoutV2Props> = ({
    children,
    Header,
    Sider,
    Title,
    Footer,
    OffLayoutArea,
}) => {
    const breakpoint = Grid.useBreakpoint();
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;
    const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;

    return (
        <ThemedLayoutContextProvider>
            <AntdLayout style={{ minHeight: "100vh" }}>
                <SiderToRender Title={Title} />
                <AntdLayout>
                    <HeaderToRender />
                    <AntdLayout.Content>
                        <div
                            style={{
                                minHeight: 360,
                                padding: isSmall ? 24 : 12,
                            }}
                        >
                            {children}
                        </div>
                        {OffLayoutArea && <OffLayoutArea />}
                    </AntdLayout.Content>
                    {Footer && <Footer />}
                </AntdLayout>
            </AntdLayout>
        </ThemedLayoutContextProvider>
    );
};
