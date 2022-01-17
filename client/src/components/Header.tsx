import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ProjectCard } from '../types/ProjectIdea';
import { AddIdeaModal } from './AddIdeaModal';

/*
Header component only takes in a function to add an idea to our state via props
*/
type Props = {
  addIdea: (idea: ProjectCard) => void;
};

const Header: React.FC<Props> = (props: Props) => {
  /*
  Here we define a state variable isAddIdeaOpen that represents whether our modal 
  should be open or closed. By default, we want our modal to be closed, so the
  default value is false.
  */
  const [isAddIdeaOpen, setAddIdea] = useState<boolean>(false);

  /*
  This is a helper function that sets our isAddIdeaOpen state to true (to open the modal)
  */
  const onOpenAddIdea = () => {
    setAddIdea(true);
  };

  return (
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
      <Flex align="center" mr={5} height="100%">
        <Heading as="h1" letterSpacing={'-0.05rem'}>
          Project Ideas
        </Heading>
      </Flex>
      <Box display={{ base: 'block' }}>
        <Button color="tomato" onClick={onOpenAddIdea}>
          {/* when Add Idea clicked, call the onOpenAddIdea function */}
          Add Idea
        </Button>
        <AddIdeaModal open={isAddIdeaOpen} closeModal={() => setAddIdea(false)} addIdea={props.addIdea} />
        {/* Render AddIdeaModal- takes in open (decide if modal should be open), 
        closeModal- function to set isAddIdeaOpen to false, and addIdea- function 
        to add an idea to our state (look at ProjectContainer to see where function is defined) */}
      </Box>
    </Flex>
  );
};

export default Header;
