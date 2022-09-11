import { rest } from 'msw';

const signInWithPassword = rest.post(
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
  (_req, res, ctx) => {
    // sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }
);

export default [signInWithPassword];
