import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { AxiosRefetch, ProjectIdea } from "../types";
import { EditIdeaModal } from "./EditIdeaModal";

type Props = {
    idea: ProjectIdea;
    refetch: AxiosRefetch;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();

    ////////////////////////////////////////////////////////
    /* Remove an idea simply by making a post request to the /remove route
    with the id of the idea to remove
    */
    const onRemoveClick = async (): Promise<void> => {
      try {
        await axios.post("/ideas/remove/" + props.idea.id);
        props.refetch();
    
        toast({
          title: "Removed!",
          description: "Idea was removed!",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } catch (e) {
        console.log(e);
    
        toast({
          title: "Remove Error!",
          description: String(e),
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    ////////////////////////////////////////////////////////
    // const onEditClick = async (): Promise<void> => {
    //   try {
    //     await axios.post("/ideas/edit/" + props.idea.id);
    //     props.refetch();

    //     toast({
    //       title: "Changed!",
    //       description: "Idea was modified!",
    //       status: "warning",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   } catch (e) {
    //     console.log(e);
    
    //     toast({
    //       title: "Edit Error!",
    //       description: String(e),
    //       status: "error",
    //       duration: 5000,
    //       isClosable: true,
    //     });
    //   }
    // }
    ////////////////////////////////////////////////////////
    return (
        <Box
            rounded="lg"
            boxShadow="lg"
            height="195px"
            fontWeight="bold"
            alignItems="center"
            borderWidth="1px">
            <Flex padding="2" flexDirection="column">
                <HStack align="flex-end" justify="space-between" >
                  <Text fontSize="lg">{props.idea.title}</Text>
                  <IconButton icon={<DeleteIcon/>} aria-label='Remove idea' size="sm" onClick={onRemoveClick}/>
                </HStack>
                <HStack align="flex-end" justify="space-between" paddingTop="1.5">
                  <Text fontSize="sm" justifyContent="justify" mt="2" fontWeight="light">{props.idea.description}</Text>
                  <IconButton icon={<EditIcon/>} aria-label='Edit idea' size="sm" onClick={onOpen}/>
                </HStack>
            </Flex>
            <EditIdeaModal isOpen={isOpen} onClose={onClose} refetch={props.refetch} id={props.idea.id} title={props.idea.title} description={props.idea.description} />
        </Box> 

        
    )
}

export default ProjectCard;