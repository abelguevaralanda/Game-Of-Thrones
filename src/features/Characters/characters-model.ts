type Character = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
};

export interface Characters {
  characters: Character[];
}

export default Character;
