import { Outlet } from 'react-router-dom';
import { Main, Title } from './MainLayoutStyled';

const MainLayout = () => {
  return (
    <>
      <Main>
        <Title>
          <img src="../../assets/got_title.png" alt="game-of-thrones" />
        </Title>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
