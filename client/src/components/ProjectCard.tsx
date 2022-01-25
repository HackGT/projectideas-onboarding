import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AxiosRefetch, ProjectIdea } from "../types";
import axios from "axios";
import { DeleteIcon } from "@chakra-ui/icons";

type Props = {
  idea: ProjectIdea;
  refetch: AxiosRefetch;
};

const ProjectCard: React.FC<Props> = (props: Props) => {
  const toast = useToast();

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
      toast({
        title: "Remove Error!",
        description: String(e),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      boxShadow="lg"
      height="195px"
      fontWeight="bold"
      alignItems="center"
    >
      <Flex padding="2" flexDirection="column">
        <HStack align="flex-end" justify="space-between">
          <Text fontSize="lg">{props.idea.title}</Text>
          <IconButton
            aria-label="Delete idea"
            icon={<DeleteIcon />}
            size="sm"
            onClick={onRemoveClick}
          />
        </HStack>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          justifyContent="justify"
          mt="2"
        >
          {props.idea.description}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
