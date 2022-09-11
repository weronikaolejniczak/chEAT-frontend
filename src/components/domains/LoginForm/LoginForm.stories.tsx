import { ComponentStory, ComponentMeta } from '@storybook/react';

import login from 'mocks/handlers/login';
import { expect, within, user } from 'utils/plays';
import { messages } from 'schemas/loginForm';
import { LoginForm } from './LoginForm';
import { page } from './LoginForm.docs';

export default {
  title: 'Domains/Login/LoginForm',
  component: LoginForm,
  parameters: {
    docs: { page },
    msw: { handlers: [...login] },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {};

export const CorrectForm = Template.bind({});
CorrectForm.args = {};
CorrectForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailField = await canvas.findByRole('textbox', { name: /e-mail/i });
  await user.type(emailField, 'weronika.olejniczak@mail.com', { delay: 100 });
  const passwordField = await canvas.findByLabelText(/password/i);
  await user.type(passwordField, 'SomePassword', { delay: 100 });
  const submitButton = await canvas.findByRole('button', {
    name: /^login$/i,
  });
  await user.click(submitButton);
  const emailError = canvas.queryByText(new RegExp(messages.email.format));
  const passwordError = canvas.queryByText(
    new RegExp(messages.password.required)
  );

  await expect(emailField).toBeValid();
  await expect(emailError).not.toBeInTheDocument();
  await expect(passwordField).toBeValid();
  await expect(passwordError).not.toBeInTheDocument();
};

export const IncorrectForm = Template.bind({});
IncorrectForm.args = {};
IncorrectForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailField = await canvas.findByRole('textbox', { name: /e-mail/i });
  await user.type(emailField, 'weronika.olejniczak', { delay: 100 });
  const passwordField = await canvas.findByLabelText(/password/i);
  const submitButton = await canvas.findByRole('button', {
    name: /^login$/i,
  });
  await user.click(submitButton);
  const emailError = await canvas.findByText(new RegExp(messages.email.format));
  const passwordError = await canvas.findByText(
    new RegExp(messages.password.required)
  );

  await expect(emailField).toBeInvalid();
  await expect(emailError).toBeInTheDocument();
  await expect(passwordField).toBeInvalid();
  await expect(passwordError).toBeInTheDocument();
};
