import { Flex, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard"

const ProjectContainer: React.FC = () => {
  // TODO: Add data fetching

  // TODO: Add modal handling with useDisclosure

  // TODO: handle loading and error states
  const[cards, setCards] = React.useState([{title: "Idea 1", description: "My first idea"},{title: "Idea 2", description: "My second idea"}])

  const cardsDisplay = cards.map(card => {
    return (
      <ProjectCard title={card.title} description={card.description}></ProjectCard>
    )
  })

  /*function deleteCard(id: string) {
    setCards(prevCards => {
      const newCards = prevCards
        
      return newCards
    })
  }

  function addCard() {
    setCards(prevCards => {
      const newCards = prevCards
      return newCards
    })
  }*/

  return (
    <>
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
        <Heading as="h1">Project Ideas</Heading>
        <Button color="tomato">Add Idea</Button>
      </Flex>

      <SimpleGrid columns={[2, 3, 5]} spacing={40} padding={10}>
        {cardsDisplay}
      </SimpleGrid>

      {/* Add modal here */}
    </>
  );
};

export default ProjectContainer;
