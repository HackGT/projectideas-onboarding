import { Button, Flex, Heading, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import useAxios from 'axios-hooks';
import React from 'react';
import { AddIdeaModal } from './AddIdeaModal';
import ProjectCard from './ProjectCard';

const ProjectContainer: React.FC = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  
  const [{data, loading, error}, refetch] = useAxios("/ideas");

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    console.log(error);

    return <h1>Error</h1>;
  }

  console.log(data);

  return (
    <div>
      <Flex 
        as="nav"
        justify={'space-between'} 
        align="center" 
        padding="1.5rem" 
        bg="tomato" 
        color="white"
        height="100%">
        <Heading as="h1">Project Ideas</Heading>
        <Button onClick={onOpen} color="tomato">Add Idea</Button>
      </Flex>

      <SimpleGrid
        columns={[2, 3, 5]}
        spacing={6}
        padding={10}>
          {data.map((idea: any) => (
            <ProjectCard idea={idea} refetch={refetch}/>
          ))}
      </SimpleGrid>

      <AddIdeaModal isOpen={isOpen} onClose={onClose} refetch={refetch}/>

    </div>
  );
};

export default ProjectContainer;
