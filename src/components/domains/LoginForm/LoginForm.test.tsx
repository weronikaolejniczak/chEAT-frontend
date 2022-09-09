import { render, screen, user } from 'utils/tests';

import { messages } from 'schemas/loginForm';
import { LoginForm } from './LoginForm';

describe('[#16] LoginForm', () => {
  beforeAll(() => {
    vi.mock('services/auth/signInPassword', () => ({
      logInWithEmailAndPassword: vi.fn(),
    }));
    vi.mock('services/auth/signInGoogle', () => ({
      signInWithGoogle: vi.fn(),
    }));
  });

  it('\n GIVEN I am not logged in\n WHEN I fill in the login form incorrectly\n THEN I should see errors', async () => {
    // GIVEN
    render(<LoginForm />);

    // WHEN
    const emailField = await screen.findByRole('textbox', { name: /e-mail/i });
    await user.type(emailField, 'weronika.olejniczak');
    const passwordField = await screen.findByLabelText(/password/i);
    const submitButton = await screen.findByRole('button', {
      name: /^login$/i,
    });
    await user.click(submitButton);
    const emailError = await screen.findByText(
      new RegExp(messages.email.format)
    );
    const passwordError = await screen.findByText(
      new RegExp(messages.password.required)
    );

    // THEN
    expect(emailField).toBeInvalid();
    expect(emailError).toBeInTheDocument();
    expect(passwordField).toBeInvalid();
    expect(passwordError).toBeInTheDocument();
  });

  it('\n GIVEN I am not logged in\n WHEN I fill in the login form correctly\n THEN I should see no errors', async () => {
    // GIVEN
    render(<LoginForm />);

    // WHEN
    const emailField = await screen.findByLabelText(/e-mail/i);
    await user.type(emailField, 'weronika.olejniczak@gmail.com');
    const passwordField = await screen.findByLabelText(/password/i);
    await user.type(passwordField, 'SomePassword');
    const submitButton = await screen.findByRole('button', {
      name: /^login$/i,
    });
    await user.click(submitButton);
    const emailError = screen.queryByText(new RegExp(messages.email.format));
    const passwordError = screen.queryByText(
      new RegExp(messages.password.required)
    );

    // THEN
    expect(emailField).toBeValid();
    expect(emailError).not.toBeInTheDocument();
    expect(passwordField).toBeValid();
    expect(passwordError).not.toBeInTheDocument();
  });

  it('\n GIVEN I am not logged in\n WHEN I type in the password\n AND click on the eye button\n THEN it should be visible', async () => {
    // GIVEN
    render(<LoginForm />);

    // WHEN
    const passwordField = await screen.findByLabelText(/password/i);
    await user.type(passwordField, 'SomePassword');
    const showPasswordIcon = await screen.findByTestId('show-password');
    await user.click(showPasswordIcon);

    // THEN
    expect(passwordField).toHaveAttribute('type', 'text');
  });

  it('\n GIVEN I am not logged in\n WHEN I type in the password\n THEN it should not be visible', async () => {
    // GIVEN
    render(<LoginForm />);

    // WHEN
    const passwordField = await screen.findByLabelText(/password/i);
    await user.type(passwordField, 'SomePassword');

    // THEN
    expect(passwordField).toHaveAttribute('type', 'password');
  });
});
