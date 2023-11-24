import React from "react";

import {
    ActionIcon,
    Button,
    Grid,
    Text,
    Title,
    Tooltip,
    Breadcrumbs,
} from "@mantine/core";

import {
    IconArrowBigUpFilled,
    IconArrowBigDownFilled,
    IconLink,
    IconPhoto,
} from "@tabler/icons-react";

const App = () => {
    return (
        <>
            Bonjour

            <Button
        leftSection={<IconLink size={14} />}
        href="https://twitter.com/mantinedev"
        target="_blank"
      >
        Voir sur le site d'archive
      </Button>

        </>
    )
};

export default App;