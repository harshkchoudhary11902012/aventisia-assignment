import { Button, Stack } from "@mantine/core";
import { IconMenu } from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
    return (
        <Stack align="center" justify="center">
            <Button w={224} color="#1e1b4b" radius={8} leftSection={<IconMenu></IconMenu>}>
                Model Library
            </Button>
        </Stack>
    );
};

export default Navbar;
