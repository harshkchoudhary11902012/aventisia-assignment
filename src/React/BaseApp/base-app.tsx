import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import Header from "./header";
import Navbar from "./navbar";
import ModelLibrary from "../Model-library/model-library";

const BaseApp = () => {
    const [screenState, setScreenState] = useState<ScreenNav>("modellibrary");

    return (
        <AppShell
            header={{ height: 92 }}
            navbar={{
                width: 264,
                breakpoint: "sm",
            }}
            layout="alt"
        >
            <AppShell.Header>
                <Header></Header>
            </AppShell.Header>
            <AppShell.Navbar>
                <Navbar
                    screenState={screenState}
                    onNav={(val) => {
                        setScreenState(val);
                    }}
                ></Navbar>
            </AppShell.Navbar>
            <AppShell.Main bg={"#f8fafc"} m={"sm"}>
                {screenState === "modellibrary" ? <ModelLibrary></ModelLibrary> : null}
            </AppShell.Main>
        </AppShell>
    );
};

export default BaseApp;
