import React from "react";
import useAxios from "axios-hooks";

import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { AddIdeaModal } from "./AddIdeaModal";

const ProjectContainer: React.FC = () => {
  const [{ data, loading, error }, refetch] = useAxios("/ideas");

  const {
    isOpen: isAddIdeaOpen,
    onOpen: onOpenAddIdea,
    onClose: onCloseAddIdea,
  } = useDisclosure();

  if (loading || error) {
    return <h1>Loading...</h1>;
  }

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
        <Button color="tomato" onClick={onOpenAddIdea}>
          Add Idea
        </Button>
      </Flex>

      <SimpleGrid columns={[2, 3, 5]} spacing={6} padding={10}>
        {data.map((idea: any) => (
          <ProjectCard idea={idea} refetch={refetch} />
        ))}
      </SimpleGrid>

      <AddIdeaModal
        isOpen={isAddIdeaOpen}
        onClose={onCloseAddIdea}
        refetch={refetch}
      />
    </>
  );
};

export default ProjectContainer;
