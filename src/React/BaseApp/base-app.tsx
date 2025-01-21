import { AppShell } from "@mantine/core";
import React from "react";
import Header from "./header";
import Navbar from "./navbar";

const BaseApp = () => {
    return (
        <AppShell
            header={{ height: 92 }}
            navbar={{
                width: 264,
                breakpoint: "sm",
            }}
        >
            <AppShell.Header>
                <Header></Header>
            </AppShell.Header>
            <AppShell.Navbar>
                <Navbar></Navbar>
            </AppShell.Navbar>
        </AppShell>
    );
};

export default BaseApp;
