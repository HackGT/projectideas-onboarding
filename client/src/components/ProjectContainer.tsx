import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';

import { ProjectCard } from '../types/ProjectIdea';
import { getIdeas } from '../services/ProjectIdeaService';

const ProjectContainer: React.FC = () => {
  const [ideas, setIdeas] = useState<ProjectCard[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const ideas = await getIdeas();
      setIdeas(ideas);
      console.log(ideas);
    };
    fetchIdeas();
  }, []);

  const addIdea = (idea: ProjectCard) => {
    setIdeas([...ideas, idea]);
  };

  const removeIdea = (id: string) => {
    const newList = ideas.filter((item) => item.id !== id);
    setIdeas(newList);
  };

  return (
    <>
      <Header addIdea={addIdea} />
      <ProjectGrid ideas={ideas} removeIdea={removeIdea} />
    </>
  );
};

export default ProjectContainer;
