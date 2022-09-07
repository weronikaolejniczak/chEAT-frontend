import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    interface JestAssertion<T = never>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}
