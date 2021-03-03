import React from 'react';
import './App.css';

// components
import ProjectContainer from './components/ProjectContainer';

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box minH="100%">
      <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="1500"
    height="1000"
    src="https://bluejeans.com/3518217987" allow="camera; microphone"></iframe>
      <ProjectContainer />
    </Box>
  );
};

export default App;
