import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, Heading } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl" mb={6}>Todo App</Heading>
        <HStack w="100%">
          <Input
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTask} leftIcon={<FaPlus />}>
            Add Task
          </Button>
        </HStack>
        <VStack spacing={3} w="100%">
          {tasks.map((t, index) => (
            <HStack key={index} w="100%" justifyContent="space-between">
              <Checkbox
                isChecked={t.completed}
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={t.completed ? "s" : "span"}>{t.text}</Text>
              </Checkbox>
              <Button colorScheme="red" onClick={() => deleteTask(index)} leftIcon={<FaTrash />}>
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;