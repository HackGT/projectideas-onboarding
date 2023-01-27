import { 
    Heading, 
    Button, 
    Text, 
    Box, 
    Flex, 
    HStack, 
    IconButton, 
    useDisclosure, 
    useToast 
} from '@chakra-ui/react'
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import axios from "axios";
import { AxiosRefetch, ProjectIdea } from "../types";
import EditIdeaModal from "./EditIdeaModal";
import "../card.css";

type Props = {
    idea: ProjectIdea;
    refetch: AxiosRefetch;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
    // user message after create/edit/delete
    const toast = useToast();

    // if idea creation/edit menu is open
    const { 
        isOpen: isEditIdeaOpen,
        onOpen: onOpenEditIdea,
        onClose: onCloseEditIdea
    } = useDisclosure();

    const onRemoveClick = async (): Promise<void> => {
        try {
            await axios.post("/ideas/remove/" + props.idea.id);
            props.refetch();

            toast({
                title: "Removed",
                description: "Idea removed!",
                status: "warning",
                duration: 3000,
                isClosable: true
            });
        } catch (e) {
            toast({
                title: "Remove Error",
                description: String(e),
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };

    return(
        <div className = "card">
            <Heading className = "card--heading">{props.idea.title}</Heading>
            <Text className = "card--text">{props.idea.description}</Text>
            <IconButton 
                aria-label="Delete idea"
                icon={<DeleteIcon />}
                size="sm"
                onClick={onRemoveClick}
            />
            <IconButton 
                aria-label="Edit idea"
                icon={<EditIcon />}
                size="sm"
                onClick={onOpenEditIdea}
            />
            <EditIdeaModal 
                isOpen={isEditIdeaOpen}
                onClose={onCloseEditIdea}
                refetch={props.refetch}
                id={props.idea.id}
                title={props.idea.title}
                description={props.idea.description}
            />
        </div>
    )
}

export default ProjectCard;
// TODO: Create ProjectCard component with props

// TODO: Create card with Chakra UI styling and display content

// TODO: Create method to delete idea on button click
