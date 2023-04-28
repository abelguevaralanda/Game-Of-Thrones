import styled from 'styled-components';

export const Main = styled.main`
  background: radial-gradient(
    circle,
    rgba(71, 66, 69, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: cover;
  background-position: center;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 0rem;
  text-align: center;
  width: 80%;
  margin-bottom: 30px;
  margin-top: 25px;

  img {
    filter: invert(100%);
    width: 40%;
  }
`;
