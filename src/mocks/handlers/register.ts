import { rest } from 'msw';

const signUp = rest.post(
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
  (_req, res, ctx) => {
    // sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }
);

export default [signUp];
