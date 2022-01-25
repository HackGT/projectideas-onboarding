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
};

const AddIdeaModal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  const onSubmit = async (values: any) => {
    try {
      await axios.post("/ideas/add", {
        title: values.title,
        description: values.description,
      });

      props.refetch();
      props.onClose();

      toast({
        title: "Added!",
        description: "Idea was added!",
        status: "success",
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
          <ModalHeader color="tomato">Add a Project Idea</ModalHeader>
          <ModalCloseButton color="tomato" />
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.title}>
              <FormLabel color="tomato">Title</FormLabel>
              <Input
                id="title"
                placeholder="My Best Idea"
                {...register("title", {
                  required: "Please enter a title",
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.description} mt={4}>
              <FormLabel color="tomato">Description</FormLabel>
              <Input
                placeholder="This is a really cool idea"
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

export { AddIdeaModal };
