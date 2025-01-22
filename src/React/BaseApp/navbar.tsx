import { AppShell, Text, NavLink, Stack, Image } from "@mantine/core";
import {
    IconClipboardText,
    IconLayoutGrid,
    IconSettings,
    IconStack2,
    IconUser,
} from "@tabler/icons-react";
import Logo from "../../Assets/logo.png";
import React from "react";

const Navbar = ({ onNav, screenState }: AppNavbar) => {
    return (
        <AppShell.Section grow>
            <Stack>
                <Image src={Logo} />
                <Stack mx={24} justify="center" mt={10}>
                    <Text fz={14} fw={600}>
                        Model Library
                    </Text>
                    <NavLink
                        w={224}
                        leftSection={<IconLayoutGrid></IconLayoutGrid>}
                        color={screenState === "modellibrary" ? "#4B4E51" : "#000"}
                        label="Model Library"
                        variant={screenState === "modellibrary" ? "filled" : "subtle"}
                        onClick={() => onNav("modellibrary")}
                        bg={screenState === "modellibrary" ? "#1e1b4b" : "#FFF"}
                        active
                        style={{ borderRadius: 8 }}
                    ></NavLink>
                    <Text fz={14} fw={600} mt={10}>
                        Extraction Builder
                    </Text>
                    <NavLink
                        w={224}
                        leftSection={<IconLayoutGrid></IconLayoutGrid>}
                        color={screenState === "label" ? "#4B4E51" : "#000"}
                        label="Label Data"
                        variant={screenState === "label" ? "filled" : "subtle"}
                        onClick={() => onNav("label")}
                        bg={screenState === "label" ? "#1e1b4b" : "#FFF"}
                        active
                        style={{ borderRadius: 8 }}
                    ></NavLink>
                    <NavLink
                        w={224}
                        leftSection={<IconStack2></IconStack2>}
                        color={screenState === "model" ? "#4B4E51" : "#000"}
                        label="Model"
                        variant={screenState === "model" ? "filled" : "subtle"}
                        onClick={() => onNav("model")}
                        bg={screenState === "model" ? "#1e1b4b" : "#FFF"}
                        active
                        style={{ borderRadius: 8 }}
                    ></NavLink>
                    <NavLink
                        w={224}
                        leftSection={<IconClipboardText></IconClipboardText>}
                        color={screenState === "test" ? "#4B4E51" : "#000"}
                        label="Test"
                        variant={screenState === "test" ? "filled" : "subtle"}
                        onClick={() => onNav("test")}
                        bg={screenState === "test" ? "#1e1b4b" : "#FFF"}
                        active
                        style={{ borderRadius: 8 }}
                    ></NavLink>
                    <Text fz={14} fw={600} mt={10}>
                        Help
                    </Text>
                    <NavLink
                        w={224}
                        leftSection={<IconSettings></IconSettings>}
                        color={screenState === "settings" ? "#4B4E51" : "#000"}
                        label="Settings"
                        variant={screenState === "settings" ? "filled" : "subtle"}
                        onClick={() => onNav("settings")}
                        bg={screenState === "settings" ? "#1e1b4b" : "#FFF"}
                        active
                        style={{ borderRadius: 8 }}
                    ></NavLink>
                    <NavLink
                        w={224}
                        leftSection={<IconUser></IconUser>}
                        color={screenState === "support" ? "#4B4E51" : "#000"}
                        label="Support"
                        variant={screenState === "support" ? "filled" : "subtle"}
                        onClick={() => onNav("support")}
                        bg={screenState === "support" ? "#1e1b4b" : "#FFF"}
                        active
                        style={{ borderRadius: 8 }}
                    ></NavLink>
                </Stack>
            </Stack>
        </AppShell.Section>
    );
};

export default Navbar;
