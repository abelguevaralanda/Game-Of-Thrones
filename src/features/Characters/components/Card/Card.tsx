import { FC } from 'react';
import Character from '../../characters-model';
import { CardContainer, CardImg, CardName, CardTitle } from './CardStyled';

interface CardProps {
  character: Character;
}

const Card: FC<CardProps> = ({ character }) => {
  return (
    <CardContainer>
      <CardImg src={character.imageUrl} alt={character.image} />
      <CardName data-testid={'paragraph'}>{character.fullName}</CardName>
      <CardTitle>{character.title}</CardTitle>
    </CardContainer>
  );
};

export default Card;
