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

type Props = {
    isOpen: boolean;
    onClose: () => void;
    refetch: AxiosRefetch;
    id: string;
    title: string;
    description: string;
};

const EditIdeaModal: React.FC<Props> = (props: Props) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
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
                title: "Edited",
                description: "Idea edited!",
                status: "warning",
                duration: 3000,
                isClosable: true
            });
        } catch(e) {
            toast({
                title: "Edit Error",
                description: String(e),
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalContent>
                    <ModalHeader>Edit Project Idea</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isInvalid={errors.title}>
                            <FormLabel>Title</FormLabel>
                            <Input 
                                id="title"
                                placeholder="Old idea"
                                {...register("title", {
                                    required: "Please enter a title",
                                    value: props.title,
                                })}
                            />
                            <FormErrorMessage>
                                {errors.title && errors.title.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.description}>
                            <FormLabel>Description</FormLabel>
                            <Input 
                                id="description"
                                placeholder="Old idea description"
                                {...register("description", {
                                    required: "Please enter a description",
                                    value: props.description,
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
                            type="submit"
                            isLoading={isSubmitting}
                        > Save </Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};

export default EditIdeaModal;