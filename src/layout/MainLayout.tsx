import { Outlet } from 'react-router-dom';
import { Main, Title } from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <>
      <Main>
        <Title>
          <img src="../../assets/got-throne-logo.svg" alt="game-of-thrones" />
        </Title>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
