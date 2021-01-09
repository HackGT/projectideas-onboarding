import React, { useState } from 'react';
import { addIdea } from '../services/ProjectIdeaService';
import { ProjectCard } from '../types/ProjectIdea';
// components
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
} from '@chakra-ui/react';

/*
AddIdeaModal takes in 3 props: 
- open: should modal be open?
- closeModal: helper function to set isAddIdeaOpen to false (located in Header.tsx) 
- addIdea: helper function to add an idea to the ideas state (located in ProjectContainer & passed in via props)
*/
type ModalProps = {
  open: boolean;
  closeModal: () => void;
  addIdea: (idea: ProjectCard) => void;
};

/*
helper function to delay a certain number of ms. Don't worry about this.
*/
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
This component is responsible for:
- displaying Modal to user. See: https://chakra-ui.com/docs/migration#modal
  for info on Modals in ChakraUI
- getting & storing user's input in state
- uploading idea to server via API
- updating the ideas state using addIdea function defined in ProjectContainer
*/
const AddIdeaModal: React.FC<ModalProps> = (props: ModalProps) => {
  /*
    To keep track of user input as they type stuff in, we need 2 state variables:
    - title: keeps track of what user has typed into "title" input box
    - description: keeps track of what user has typed into "description" input box
  */
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  /*
  We also define another boolean state to decide whether to show loading symbol.
  */
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    /* 
    Some html stuff to tell react not to reload the page 
    */
    event.preventDefault();

    setLoading(true); // set loading state to true
    try {
      await delay(500); //delay 500ms...for dramatic effect...
      /* 
      Calls our API endpoint /ideas/add to add a new idea to our database. 
      We pass in the title & description state which store what the user 
      has typed in so far.
      */
      const response = await addIdea({
        title,
        description,
      });

      /*
      Calls the addIdea function to add an idea to our ideas state 
      (function was passed in via props --> look at ProjectContainer.tsx
      to see implementation). Note that we use the id that we got from
      our API response, so our ProjectCard knows its own id.
      */
      props.addIdea({
        title: title,
        description: description,
        id: String(response.id), //access id from response
      });

      /*
      Call function to closeModal by setting isAddIdeaOpen to false..look at Header.tsx
      */
      props.closeModal();
      toast({
        title: 'Added!',
        description: 'Idea was added!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      }); // make toast message for user feedback
    } catch (e) {
      console.log(e);
      toast({
        title: 'Save Error!',
        description: String(e),
        status: 'error',
        duration: 3000,
        isClosable: true,
      }); // if there was an issue, make an error toast messaage
    }
    setLoading(false); // everything is done now --> so set loading to false
  };

  /*
  This function gets triggerred everytime a user types something inside the
  title input box. It will set the title state to whatever user typed in.
  */
  const onTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value); // event.currentTarget.value gets whatever the user has typed in
  };

  /*
  This function gets triggered everytiime a user types something inside the
  description input box. It will set the description state to whatever user typed in.
  */
  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  return (
    <Modal isOpen={props.open} onClose={props.closeModal}>
      <ModalOverlay />
      {/* when submit button clicked --> call handleSubmit */}
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader color="tomato">Add a Project Idea</ModalHeader>
          <ModalCloseButton color="tomato" />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel color="tomato">Title</FormLabel>
              <Input name="title" placeholder="My Best Idea" onChange={onTitleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="tomato">Description</FormLabel>
              <Input name="description" placeholder="This is a really cool idea" onChange={onDescriptionChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* in html, setting type="submit" will trigger the form onSubmit */}
            <Button color="tomato" borderColor="tomato" mr={3} type="submit" isLoading={loading}>
              Save
            </Button>
            {/* when button clicked, call function to close modal */}
            <Button color="tomato" borderColor="tomato" onClick={props.closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export { AddIdeaModal };
