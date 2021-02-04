import React, { useState } from 'react';
import { editIdea } from '../services/ProjectIdeaService';
// import { ProjectIdea } from '../types/ProjectIdea';
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

type ModalProps = {
  open: boolean;
  closeModal: () => void;
  editIdea: (description: string, title: string) => void;
  id: string;
  description: string;
  title: string;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const EditIdeaModal: React.FC<ModalProps> = (props: ModalProps) => {
  const [title, setTitle] = useState<string>(props.title);
  const [description, setDescription] = useState<string>(props.description);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      await delay(500);

      await editIdea(props.id, {
        title,
        description,
      });
      console.log(description);
      console.log(title);
      props.editIdea(description, title);

      props.closeModal();
      toast({
        title: 'Edited!',
        description: 'Idea was edited!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
      toast({
        title: 'Save Error!',
        description: String(e),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const onTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onDescriptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  return (
    <Modal isOpen={props.open} onClose={props.closeModal}>
      <ModalOverlay />
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <ModalHeader color="tomato">Edit a Project Idea</ModalHeader>
          <ModalCloseButton color="tomato" />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel color="tomato">Title</FormLabel>
              <Input name="title" value={title} onChange={onTitleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color="tomato">Description</FormLabel>
              <Input name="description" value={description} onChange={onDescriptionChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button color="tomato" borderColor="tomato" mr={3} type="submit" isLoading={loading}>
              Save
            </Button>
            <Button color="tomato" borderColor="tomato" onClick={props.closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export { EditIdeaModal };
