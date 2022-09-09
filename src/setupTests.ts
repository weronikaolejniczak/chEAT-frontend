import matchers from '@testing-library/jest-dom/matchers';

import 'font-awesome';
import { server } from './mocks/server';

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
