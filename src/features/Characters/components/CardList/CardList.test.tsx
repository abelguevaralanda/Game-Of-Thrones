import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';
import Home from '../../../../pages/Home/Home';

import { screen, waitFor } from '@testing-library/react';
import { errorHandlers, handlers } from '../../../../mocks/handlers';
import { APIStatus } from '../../characters-slice';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a CharacterGotList component', () => {
  describe('When component loads and API responds with characters', () => {
    test('Then it should render the list', async () => {
      server.use(...handlers);
      renderWithProviders(<Home />);

      const images = await screen.findByRole('img');
      expect(images).toBeInTheDocument();
    });
  });
  describe('When component loads and API responds with error', () => {
    test('Then it should render the error message', async () => {
      server.use(...errorHandlers);
      renderWithProviders(<Home />, {
        preloadedState: {
          characters: {
            characters: [],
            status: APIStatus.ERROR,
            charactersState: 'error',
          },
        },
      });

      const errorMessage = await screen.findByTestId('paragraph');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
