import React from 'react';
import './App.css';

// components
import ProjectGrid from './components/ProjectGrid';
import Header from './components/Header';

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box minH="100%">
      <Header />
      <ProjectGrid />
    </Box>
  );
};

export default App;
