import { Characters } from './characters-model';

const getAllCharacters = async (): Promise<Characters> => {
  const response = await fetch('https://ThronesApi.com/api/v2/Characters');

  const character = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return { characters: character };
};

export default getAllCharacters;
