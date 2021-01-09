import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';

import { ProjectCard } from '../types/ProjectIdea';
import { getIdeas } from '../services/ProjectIdeaService';

const ProjectContainer: React.FC = () => {
  /*
  This is the most important state variable! It holds a list 
  of all the user's ideas. By default, this variable is set
  to an empty array, indicating the user has 0 ideas. 
  The useState hook also provides the function setIdeas, which
  are used to set the value of our state variable. Remember,
  whenever the state changes, the component will automatically
  rerender and the state variable will take on the new value.
  */
  const [ideas, setIdeas] = useState<ProjectCard[]>([]);

  /*
  useEffect here is responsible for making an API call to get the user's ideas, 
  and setting our idea state to that.
  */
  useEffect(() => {
    /*
    fetchIdeas is a helper function that will make the API call & change the state
    */
    const fetchIdeas = async () => {
      const ideasResponse = await getIdeas(); // getIdeas will make our API call & return an array of the user's ideas
      setIdeas(ideasResponse); // change our ideas state to match the API response
    };

    fetchIdeas(); //call our helper function
  }, []);

  /*
  Helper function that takes in an idea & adds it to our state
  */
  const addIdea = (idea: ProjectCard) => {
    /* 
    check out https://davidwalsh.name/spread-operator, 
    to better understand this syntax 
    */
    setIdeas([...ideas, idea]);
  };

  /*
  Helper function that takes in an id & removes it from our state
  */
  const removeIdea = (id: string) => {
    /*
    filter our ideas variable and take out the item that matches the id passed in
    */
    const newList = ideas.filter((item) => item.id !== id);
    setIdeas(newList); // set ideas state to our updated list
  };

  return (
    <>
      <Header addIdea={addIdea} /> {/* render Header & pass in our addIdea helper function as props*/}
      <ProjectGrid ideas={ideas} removeIdea={removeIdea} />
      {/* render ProjectGrid, pass in our ideas state & removeIdea helper function as props*/}
    </>
  );
};

export default ProjectContainer;
