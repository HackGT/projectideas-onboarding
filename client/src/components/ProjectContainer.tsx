import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../types/ProjectIdea';
import { getIdeas } from '../services/ProjectIdeaService';
// components
import ProjectGrid from './ProjectGrid';
import Header from './Header';

const ProjectContainer: React.FC = () => {
  const [ideas, setIdeas] = useState<ProjectCard[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const ideas = await getIdeas();
      setIdeas(ideas);
    };
    fetchIdeas();
  }, []);

  const removeIdea = (key: string) => {
    const newList = ideas.filter((item) => item.id !== key);

    setIdeas(newList);
  };

  const addIdea = (idea: ProjectCard) => {
    setIdeas([...ideas, idea]);
  };

  // const editIdea = (key: string, idea: ProjectCard) => {
  //   const newList = ideas.map((item) => {
  //     if (item.id === key) {
  //       return idea;
  //     } else {
  //       return item;
  //     }
  //     setIdeas(newList);
  //   });
  // };

  return (
    <>
      <Header addIdea={addIdea} />
      <ProjectGrid ideas={ideas} removeIdea={removeIdea} />
    </>
  );
};

export default ProjectContainer;
