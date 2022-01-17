import { Box, Button, Center, Flex, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
import { removeIdea } from '../services/ProjectIdeaService';

/* 
Props Type defines what props our Card will be taking in. 
In total, the ProjectCard component will take in title, description, 
id, and removeCard() as props. Note that the title & description are defined in 
the ProjectIdea type. removeCard() is a function prop that enables the ProjectCard
component to remove the card.
*/
type Props = ProjectIdea & {
  id: string;
  removeCard: (id: string) => void;
};

/*
This is the ProjectCard component- it's a Presentational Component!
In this case, it is responsible for displaying the idea card to the user.
*/
const ProjectCard: React.FC<Props> = (props: Props) => {
  const toast = useToast(); //this is a chakra-ui hook for making Toast messages

  /*
  onRemoveClick gets called when the remove button is clicked. It is responsible for 3 things:
    1. Calling removeIdea(id) which will tell our server to remove the idea with a certain id
    2. Calling props.removeCard, which will remove the idea from our state
    3. Show user feedback using Toast messages
  */
  const onRemoveClick = async (): Promise<void> => {
    try {
      await removeIdea(props.id); //removeIdea is defined in our service- it calls the /ideas/remove/:id endpoint
      props.removeCard(props.id); //remove card from our state (defined in ProjectContainer)
      toast({
        title: 'Removed!',
        description: 'Idea was removed!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      }); // toast message to tell user, idea was removed!
    } catch (e) {
      toast({
        title: 'Remove Error!',
        description: String(e),
        status: 'error',
        duration: 5000,
        isClosable: true,
      }); // if there was an error --> catch it and display a toast message
    }
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      height="195px"
      width="165px"
      fontWeight="bold"
      alignItems="center"
      bg="tomato"
      boxShadow="lg"
    >
      <Flex padding="7px" flexDirection="column" h="100%">
        <Center>
          <Text color="white" fontSize="lg">
            {props.title} {/* access the title via props */}
          </Text>
        </Center>
        <Text color="white" fontSize="xs" fontWeight="semibold" justifyContent="justify">
          {props.description} {/* access the description via props */}
        </Text>
        <Center h="10%" marginTop="auto">
          <Button fontSize="sm" color="tomato" h="100%" borderRadius="md" onClick={onRemoveClick}>
            Remove
          </Button>
          {/* When button is clicked --> call the onRemoveClick function */}
        </Center>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
