import { ActionIcon, Avatar, Divider, Group, Paper, Stack, Text, TextInput } from "@mantine/core";
import React from "react";
import { IconBell, IconHeart, IconSearch } from "@tabler/icons-react";

const Header = () => {
    return (
        <Paper shadow="sm">
            <Group wrap="nowrap" mx={"lg"} mr={50} justify="space-between" h={92}>
                <Group>
                    <Text fz={20} fw={500}>
                        AI/ML Model Builder
                    </Text>
                </Group>
                <Group>
                    <TextInput
                        w={320}
                        h={44}
                        radius={8}
                        variant="filled"
                        placeholder="Search"
                        leftSection={<IconSearch />}
                        rightSection={<Text>⌘ K</Text>}
                    ></TextInput>
                </Group>
                <Group gap={"xl"}>
                    <ActionIcon radius={"lg"} variant="default" size={"lg"}>
                        <IconBell />
                    </ActionIcon>
                    <ActionIcon radius={"lg"} variant="default" size={"lg"}>
                        <IconHeart />
                    </ActionIcon>
                    <Divider orientation="vertical" size={"md"} />
                    <Group>
                        <Avatar variant="light" radius="xl" size={40} src="" />
                        <Stack gap={0}>
                            <Text fz={16} c={"#1d1d1d"}>
                                Neurotic Spy
                            </Text>
                            <Text fz={12} c={"#64748B"}>
                                neurotic@taildo.com
                            </Text>
                        </Stack>
                    </Group>
                </Group>
            </Group>
            {/* </Group> */}
        </Paper>
    );
};

export default Header;
