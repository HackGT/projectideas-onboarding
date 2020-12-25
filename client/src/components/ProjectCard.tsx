import React from 'react';

// components
import { Box, Button, Text, Center, Flex } from '@chakra-ui/react';

type ProjectCardProps = {
  title: string;
  description: string;
  flag: boolean;
  id: number;
};

type Props = ProjectCardProps & {
  removeCard: (key: number) => void;
};

const ProjectCard: React.FC<Props> = (props: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      height="175px"
      width="145px"
      fontWeight="bold"
      alignItems="center"
      bg="tomato"
      boxShadow="lg"
    >
      <Flex padding="7px" flexDirection="column" h="100%">
        <Center>
          <Text color="white" fontSize="lg">
            {props.title}
          </Text>
        </Center>
        <Text color="white" fontSize="xs" fontWeight="semibold" justifyContent="justify">
          {props.description}
        </Text>
        <Center h="10%" marginTop="auto">
          <Button
            fontSize="sm"
            color="tomato"
            h="100%"
            borderRadius="md"
            onClick={() => {
              console.log('hi');
              props.removeCard(props.id);
            }}
          >
            Remove
          </Button>
        </Center>
      </Flex>
    </Box>
  );
};

export { ProjectCard };
export type { ProjectCardProps };
