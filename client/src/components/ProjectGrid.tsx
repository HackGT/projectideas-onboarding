import { Center, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
import ProjectCard from './ProjectCard';

type ProjectCard = ProjectIdea & {
  id: string;
}; // define a type that includes title, description, and id

type Props = {
  ideas: ProjectCard[]; // ideas are an array of ProjectCard types
  removeIdea: (id: string) => void; // take in a function to remove an Idea from our state
};

/*
The prupose of this component is to take in an array of ideas 
(via props) and output a Grid of ProjectCard components
*/
const ProjectGrid: React.FC<Props> = (props: Props) => {
  /*
    For more information on map, See here: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    Our goal is to map every idea to a GridItem that contains our ProjectCard with the correct title & description.
    When the map function is complete, the projectCards variable will hold a list of each ProjectCard (stored inside a GridItem)

    See: https://chakra-ui.com/docs/layout/grid
    To learn about how ChakraUI grids work
  */
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
        {/* since we already have our list of GridItems, 
        we just need to put them inside our Grid so the 
        user can see them*/}
      </Grid>
    </Center>
  );
};

export default ProjectGrid;
