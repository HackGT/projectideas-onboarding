import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import ProjectContainer from "./components/ProjectContainer";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ProjectContainer />
    </ChakraProvider>
  );
};

export default App;
