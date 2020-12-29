import React, { useState } from 'react';
import { ProjectIdea } from '../types/ProjectIdea';
// components
import ProjectGrid from './ProjectGrid';
import Header from './Header';

type ProjectCard = ProjectIdea & {
  id: string;
};

const data: ProjectCard[] = [
  {
    title: 'Project Idea 1',
    description: 'Create a project idea dashboard to store all my best ideas',
    id: '1',
  },
  {
    title: 'Project Idea 2',
    description: 'sample desc.',
    id: '2',
  },
  {
    title: 'Project Idea 3',
    description: 'sample desc.',
    id: '3',
  },
  {
    title: 'Project Idea 4',
    description: 'sample desc.',
    id: '4',
  },
  {
    title: 'Project Idea 5',
    description: 'sample desc.',
    id: '5',
  },
  {
    title: 'Project Idea 6',
    description: 'sample desc.',
    id: '6',
  },
  {
    title: 'Project Idea 7',
    description: 'sample desc.',
    id: '7',
  },
  {
    title: 'Project Idea 8',
    description: 'sample desc.',
    id: '8',
  },
];

const ProjectContainer: React.FC = () => {
  const [ideas, setIdeas] = useState<ProjectCard[]>(data);

  const removeIdea = (key: string) => {
    // const ideasCopy = ideas;
    // ideasCopy.splice(key, 1);
    // console.log(ideasCopy);
    const newList = ideas.filter((item) => item.id !== key);
    setIdeas(newList);
  };

  const addIdea = (idea: ProjectCard) => {
    setIdeas([...ideas, idea]);
  };

  return (
    <>
      <Header addIdea={addIdea} />
      <ProjectGrid ideas={ideas} removeIdea={removeIdea} />
    </>
  );
};

export default ProjectContainer;
