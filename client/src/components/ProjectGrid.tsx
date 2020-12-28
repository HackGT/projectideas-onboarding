import React, { useState } from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
// components
import { Grid, GridItem, Center } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';

type ProjectCard = ProjectIdea & {
  id: string;
};

const data: ProjectCard[] = [
  {
    title: 'Project Idea 1',
    description: 'Create a project idea dashboard to store all my best ideas',
    id: '1',
  },
  {
    title: 'Project Idea 2',
    description: 'sample desc.',
    id: '2',
  },
  {
    title: 'Project Idea 3',
    description: 'sample desc.',
    id: '3',
  },
  {
    title: 'Project Idea 4',
    description: 'sample desc.',
    id: '4',
  },
  {
    title: 'Project Idea 5',
    description: 'sample desc.',
    id: '5',
  },
  {
    title: 'Project Idea 6',
    description: 'sample desc.',
    id: '6',
  },
  {
    title: 'Project Idea 7',
    description: 'sample desc.',
    id: '7',
  },
  {
    title: 'Project Idea 8',
    description: 'sample desc.',
    id: '8',
  },
];

const ProjectGrid: React.FC = () => {
  const [ideas, setIdeas] = useState<ProjectCard[]>(data);

  const removeIdea = (key: string) => {
    // const ideasCopy = ideas;
    // ideasCopy.splice(key, 1);
    // console.log(ideasCopy);
    const newList = ideas.filter((item) => item.id !== key);
    setIdeas(newList);
  };

  // useEffect(() => {
  //   setIdeas(data);
  // }, []);

  const projectCards = ideas.map((idea, index) => {
    return (
      <GridItem key={index}>
        <Center>
          <ProjectCard id={idea.id} title={idea.title} description={idea.description} removeCard={removeIdea} />
        </Center>
      </GridItem>
    );
  });

  console.log(projectCards.length + 1);

  return (
    <Center padding="10px">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']} gap={6}>
        {projectCards}
      </Grid>
    </Center>
  );
};

export default ProjectGrid;
