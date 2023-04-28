import { rest } from 'msw';

export const handlers = [
  rest.get('https://ThronesApi.com/api/v2/Characters', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          firstName: 'Daenerys',
          lastName: 'Targaryen',
          fullName: 'Daenerys Targaryen',
          title: 'Mother of Dragons',
          family: 'House Targaryen',
          image: 'daenerys.jpg',
          imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
        },
      ]),
    );
  }),
];

export const errorHandlers = [
  rest.get('https://ThronesApi.com/api/v2/Characters', (_req, res, ctx) => {
    return res.once(ctx.status(500), ctx.json(null));
  }),
];
