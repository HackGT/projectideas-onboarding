import React from "react";
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
  FormErrorMessage,
} from "@chakra-ui/react";
import { AxiosRefetch } from "../types";
import { useForm } from "react-hook-form";
import axios from "axios";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  refetch: AxiosRefetch;
  id: string;
  title: string;
  description: string;
};

const EditIdeaModal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  const onSubmit = async (values: any) => {
    try {
      await axios.post("/ideas/edit/" + props.id, {
        title: values.title,
        description: values.description,
      });

      props.refetch();
      props.onClose();

      toast({
        title: "Edited!",
        description: "Idea was modified!",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);

      toast({
        title: "Save Error!",
        description: String(e),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader color="tomato">Edit a Project Idea</ModalHeader>
          <ModalCloseButton color="tomato" />
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.title}>
              <FormLabel color="tomato">New Title</FormLabel>
              <Input
                id="title"
                placeholder="The old idea sucked"
                {...register("title", {
                  required: "Please enter a title",
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.description} mt={4}>
              <FormLabel color="tomato">New Description</FormLabel>
              <Input
                 id="description"
                placeholder="The old description sucked"
                {...register("description", {
                  required: "Please enter a description",
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              color="tomato"
              borderColor="tomato"
              mr={3}
              type="submit"
              isLoading={isSubmitting}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export { EditIdeaModal };
