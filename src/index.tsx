import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import BaseApp from "./React/BaseApp/base-app";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <MantineProvider>
            <BaseApp />
        </MantineProvider>
    </React.StrictMode>
);
