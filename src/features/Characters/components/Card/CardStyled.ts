import styled from 'styled-components';

export const CardContainer = styled.article`
  width: 100%;
  text-align: center;
`;

export const CardImg = styled.img`
  max-width: 150px;
  max-height: 200px;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: -1px -1px 6px 0 rgb(113 116 112 / 70%),
    4px 4px 16px 2px rgb(157 169 182 / 77%);
`;

export const CardName = styled.p`
  font-family: var(--font-family-cinzel-regular);
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin: 5px;
`;

export const CardTitle = styled.p`
  font-family: var(--font-family-cinzel-regular);
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-top: 10px;
`;
