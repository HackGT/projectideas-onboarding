import React from 'react';
import './App.css';

// components
import ProjectGrid from './components/ProjectGrid';
import { Box, Flex, Heading } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box minH="100%">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="tomato" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            Project Ideas
          </Heading>
        </Flex>
      </Flex>
      <ProjectGrid />
    </Box>
  );
};

export default App;
