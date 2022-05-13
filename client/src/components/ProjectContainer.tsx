import { Flex, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const ProjectContainer: React.FC = () => {
  // TODO: Add data fetching

  // TODO: Add modal handling with useDisclosure

  // TODO: handle loading and error states

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="tomato"
        color="white"
        height="100%"
      >
        <Heading as="h1">Project Ideas</Heading>
        <Button color="tomato">Add Idea</Button>
      </Flex>

      <SimpleGrid columns={[2, 3, 5]} spacing={6} padding={10}>
        {/* Add ProjectCard ideas here */}
      </SimpleGrid>

      {/* Add modal here */}
    </>
  );
};

export default ProjectContainer;
