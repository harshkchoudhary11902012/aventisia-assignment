import {
    ActionIcon,
    Badge,
    Button,
    Group,
    Modal,
    Paper,
    Select,
    Stack,
    Table,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import {
    IconArrowsUpDown,
    IconCalendar,
    IconDotsVertical,
    IconFilter,
    IconPlus,
    IconSearch,
} from "@tabler/icons-react";
import React, { useState } from "react";

interface Model {
    name: string;
    type: string;
    llm: string;
    description: string;
    createdOn: string;
    lastTrainedOn: string;
    status: string;
}

const ModelLibrary = () => {
    const [models, setModels] = useState<Model[]>([]);
    const [modelOpened, setModalOpened] = useState(false);
    const [newModel, setNewModel] = useState<Model>({
        name: "",
        type: " ",
        llm: "",
        description: "",
        createdOn: "",
        lastTrainedOn: "",
        status: "",
    });

    const modalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewModel((prev) => ({ ...prev, [name]: value }));
    };

    const modalSubmit = () => {
        setModels((prev) => [
            ...prev,
            {
                ...newModel,
                createdOn: new Date().toLocaleDateString(),
                lastTrainedOn: new Date().toLocaleDateString(),
            },
        ]);
        setModalOpened(false);
        setNewModel({
            name: "",
            type: "",
            llm: "",
            description: "",
            createdOn: "",
            lastTrainedOn: "",
            status: "",
        });
    };
    const handleSelectChange = (name: string, value: string) => {
        setNewModel((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Paper p={"md"} bg={"#FFF"} shadow="xs">
            <Stack>
                <Group justify="space-between">
                    <Text fz={20} fw={500}>
                        Model Library
                    </Text>
                    <Button
                        h={42}
                        w={185}
                        leftSection={<IconPlus></IconPlus>}
                        bg={"#4f46e5"}
                        radius={10}
                        onClick={() => setModalOpened(true)}
                    >
                        Create New Model
                    </Button>
                </Group>
                <Group wrap="nowrap" gap={100}>
                    <TextInput
                        w={800}
                        variant="ouline"
                        bg={"#f9fafb"}
                        placeholder="Search by Name, ID"
                        leftSection={<IconSearch />}
                    />
                    <Button w={140} leftSection={<IconFilter />} bg={"#F9FAFB"} c={"#767676"}>
                        Filters
                    </Button>
                    <Button w={200} leftSection={<IconCalendar />} bg={"#F9FAFB"} c={"#767676"}>
                        April 11 - April 24
                    </Button>
                </Group>
                <Table mt={10}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th ta={"center"}>
                                Model Name {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                            <Table.Th ta={"center"}>
                                Model Type {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                            <Table.Th ta={"center"}>
                                Description {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                            <Table.Th ta={"center"}>
                                Created On {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                            <Table.Th ta={"center"}>
                                Last Trained On {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                            <Table.Th ta={"center"}>
                                Status {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                            <Table.Th ta={"center"}>
                                Actions {<IconArrowsUpDown color="#a3a3a3" size={14} />}
                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {models.map((item, index) => (
                            <Table.Tr key={index}>
                                <Table.Td ta={"center"}>{item.name}</Table.Td>
                                <Table.Td ta={"center"}>{item.type}</Table.Td>
                                <Table.Td ta={"center"}>{item.description}</Table.Td>
                                <Table.Td ta={"center"}>{item.createdOn}</Table.Td>
                                <Table.Td ta={"center"}>{item.lastTrainedOn}</Table.Td>
                                <Table.Td ta={"center"}>
                                    <Badge color="#DCFCE7" variant="filled" c={"#16a34a"} p={"sm"}>
                                        Active
                                    </Badge>
                                </Table.Td>
                                <Table.Td ta={"center"}>
                                    <ActionIcon variant="white" color="black">
                                        <IconDotsVertical />
                                    </ActionIcon>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
                <Modal
                    opened={modelOpened}
                    onClose={() => setModalOpened(false)}
                    title="Create New Model"
                >
                    <Stack>
                        <TextInput
                            label="Model Name"
                            name="name"
                            value={newModel.name}
                            onChange={modalChange}
                            required
                        />
                        <Select
                            label="Model Type"
                            name="type"
                            data={[
                                { value: "India", label: "India" },
                                { value: "China", label: "China" },
                                { value: "Russia", label: "Russia" },
                            ]}
                            value={newModel.type}
                            onChange={(value) => handleSelectChange("type", value!)}
                            placeholder="Select model type"
                            required
                        />
                        <Select
                            label="LLM"
                            name="llm"
                            data={[
                                { value: "Asia", label: "Asia" },
                                { value: "Africa", label: "Africa" },
                                { value: "USSR", label: "USSR" },
                            ]}
                            value={newModel.llm}
                            onChange={(value) => handleSelectChange("llm", value!)}
                            placeholder="Select LLM"
                            required
                        />
                        <Textarea
                            label="Model Description"
                            name="description"
                            value={newModel.description}
                            onChange={modalChange}
                            required
                        />
                        <Group grow>
                            <Button
                                onClick={() => setModalOpened(false)}
                                variant="light"
                                radius={10}
                                color="#4f46e5"
                            >
                                Cancel
                            </Button>
                            <Button onClick={modalSubmit} color="#4f46e5" radius={10}>
                                Save
                            </Button>
                        </Group>
                    </Stack>
                </Modal>
            </Stack>
        </Paper>
    );
};

export default ModelLibrary;
