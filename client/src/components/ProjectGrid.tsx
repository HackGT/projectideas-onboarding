import { Center, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
import ProjectCard from './ProjectCard';

type ProjectCard = ProjectIdea & {
  id: string;
};

type Props = {
  ideas: ProjectCard[];
  removeIdea: (id: string) => void;
};

const ProjectGrid: React.FC<Props> = (props: Props) => {
  const projectCards = props.ideas.map((idea) => {
    return (
      <GridItem key={idea.id}>
        <Center>
          <ProjectCard id={idea.id} title={idea.title} description={idea.description} removeCard={props.removeIdea} />
        </Center>
      </GridItem>
    );
  });

  return (
    <Center padding="10px">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']} gap={6}>
        {projectCards}
      </Grid>
    </Center>
  );
};

export default ProjectGrid;
