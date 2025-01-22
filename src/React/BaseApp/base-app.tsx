import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import Header from "./header";
import Navbar from "./navbar";

const BaseApp = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false);
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
                        // setNavbarOpen(false);
                    }}
                ></Navbar>
            </AppShell.Navbar>
            <AppShell.Main bg={"#f8fafc"}></AppShell.Main>
        </AppShell>
    );
};

export default BaseApp;
