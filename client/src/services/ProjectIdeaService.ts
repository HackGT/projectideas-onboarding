import axios from 'axios';
import { ProjectIdea } from '../types/ProjectIdea';

const addIdea = async (idea: ProjectIdea): Promise<void> => {
  try {
    await axios.post('/ideas/add', idea);
  } catch (e: any) {
    throw new Error('Problem submitting form. Try again later.');
  }
};

const removeIdea = async (id: string): Promise<void> => {
  await axios.post('/ideas/remove/' + id);
};

const editIdea = async (id: string, idea: ProjectIdea): Promise<void> => {
  await axios.post('/ideas/edit/' + id, idea);
};

export { addIdea, removeIdea, editIdea };
