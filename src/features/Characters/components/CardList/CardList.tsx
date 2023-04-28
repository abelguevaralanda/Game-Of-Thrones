import { FC } from 'react';
import Character from '../../characters-model';
import { CharactersListContainer } from './CardListStyled';
import Card from '../Card/Card';

interface CardListProps {
  characters: Character[];
}
const CardList: FC<CardListProps> = ({ characters }) => {
  return (
    <CharactersListContainer>
      {characters.map(character => (
        <li className="character-list" key={character.id}>
          <Card character={character} />
        </li>
      ))}
    </CharactersListContainer>
  );
};

export default CardList;
