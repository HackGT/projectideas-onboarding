/*
This file contains the types that are used throughout the app.
*/

export type ProjectIdea = {
  title: string;
  description: string;
};

export type ProjectCard = ProjectIdea & {
  id: string;
};
