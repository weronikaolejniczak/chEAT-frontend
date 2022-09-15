import { ComponentStory, ComponentMeta } from '@storybook/react';

import register from 'mocks/handlers/register';
import { WithoutStories } from 'components/storybook/WithoutStories.docs';
import { expect, within, user } from 'utils/plays';
import { messages } from 'schemas/registerForm';
import { RegisterForm } from './RegisterForm';

export default {
  title: 'Domains/Register/RegisterForm',
  component: RegisterForm,
  parameters: {
    docs: { page: WithoutStories },
    msw: { handlers: [...register] },
  },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {};

export const CorrectForm = Template.bind({});
CorrectForm.args = {};
CorrectForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const nameField = await canvas.findByRole('textbox', { name: /name/i });
  await user.type(nameField, 'Jane', { delay: 100 });
  const emailField = await canvas.findByRole('textbox', { name: /e-mail/i });
  await user.type(emailField, 'jane.doe@mail.com', { delay: 100 });
  const passwordField = await canvas.findByLabelText(/^password$/i);
  await user.type(passwordField, 'SomePassword', { delay: 100 });
  const repeatPasswordField = await canvas.findByLabelText(/repeat password/i);
  await user.type(repeatPasswordField, 'SomePassword', { delay: 100 });
  const submitButton = await canvas.findByRole('button', {
    name: /^register$/i,
  });
  await user.click(submitButton);
  const nameError = canvas.queryByText(new RegExp(messages.name.required));
  const emailError = canvas.queryByText(new RegExp(messages.email.format));
  const passwordError = canvas.queryByText(
    new RegExp(messages.password.required)
  );
  const repeatPasswordError = canvas.queryByText(
    new RegExp(messages.repeatPassword.required)
  );

  await expect(nameField).toBeValid();
  await expect(nameError).not.toBeInTheDocument();
  await expect(emailField).toBeValid();
  await expect(emailError).not.toBeInTheDocument();
  await expect(passwordField).toBeValid();
  await expect(passwordError).not.toBeInTheDocument();
  await expect(repeatPasswordField).toBeValid();
  await expect(repeatPasswordError).not.toBeInTheDocument();
};

export const IncorrectForm = Template.bind({});
IncorrectForm.args = {};
IncorrectForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const nameField = await canvas.findByRole('textbox', { name: /name/i });
  const emailField = await canvas.findByRole('textbox', { name: /e-mail/i });
  await user.type(emailField, 'jane.doe', { delay: 100 });
  const passwordField = await canvas.findByLabelText(/^password$/i);
  const repeatPasswordField = await canvas.findByLabelText(/repeat password/i);
  const submitButton = await canvas.findByRole('button', {
    name: /^register$/i,
  });
  await user.click(submitButton);
  const nameError = canvas.queryByText(new RegExp(messages.name.required));
  const emailError = await canvas.findByText(new RegExp(messages.email.format));
  const passwordError = await canvas.findByText(
    new RegExp(messages.password.required)
  );
  const repeatPasswordError = canvas.queryByText(
    new RegExp(messages.repeatPassword.required)
  );

  await expect(nameField).toBeInvalid();
  await expect(nameError).toBeInTheDocument();
  await expect(emailField).toBeInvalid();
  await expect(emailError).toBeInTheDocument();
  await expect(passwordField).toBeInvalid();
  await expect(passwordError).toBeInTheDocument();
  await expect(repeatPasswordField).toBeInvalid();
  await expect(repeatPasswordError).toBeInTheDocument();
};
