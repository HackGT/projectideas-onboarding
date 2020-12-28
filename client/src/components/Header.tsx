import React, { useState } from 'react';

// components
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { AddIdeaModal } from './AddIdeaModal';

const Header: React.FC = () => {
  const [isAddIdeaOpen, setAddIdea] = useState<boolean>(false);

  const onOpenAddIdea = () => {
    setAddIdea(true);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="tomato"
      color="white"
      height="100%"
    >
      <Flex align="center" mr={5} height="100%">
        <Heading as="h1" size="5xl" letterSpacing={'-.05rem'}>
          Project Ideas
        </Heading>
      </Flex>
      <Box display={{ base: 'block' }}>
        <Button color="tomato" onClick={onOpenAddIdea}>
          Add Idea
        </Button>
        <AddIdeaModal open={isAddIdeaOpen} closeModal={() => setAddIdea(false)} />
      </Box>
    </Flex>
  );
};

export default Header;
