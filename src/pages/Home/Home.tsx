import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  APIStatus,
  getAllCharactersAsync,
  selectCharacters,
} from '../../features/Characters/characters-slice';
import CardList from '../../features/Characters/components/CardList/CardList';
import { ErrorImg, ErrorText, Loading } from './HomeStyled';

const Home = () => {
  const dispatch = useAppDispatch();
  const { characters, charactersState } = useAppSelector(selectCharacters);

  useEffect(() => {
    dispatch(getAllCharactersAsync());
  }, [dispatch]);

  const homeStatus = () => {
    switch (charactersState) {
      case 'idle':
        return <Loading src="../../../assets/throne-game-of-thrones.gif" />;

      case 'error':
        return (
          <>
            <ErrorImg src="../../../assets/1f5q3wkv2wr21.jpg" />
            <ErrorText data-testid={'paragraph'}>
              Error, The Winter Is Coming
            </ErrorText>
          </>
        );

      default:
        return <CardList characters={characters} />;
    }
  };

  return <>{homeStatus()}</>;
};

export default Home;
