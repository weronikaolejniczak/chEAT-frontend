import { ComponentStory, ComponentMeta } from '@storybook/react';

import login from 'mocks/handlers/login';
import { WithoutStories } from 'components/storybook/WithoutStories.docs';
import { expect, within, user } from 'utils/plays';
import { messages } from 'schemas/resetPasswordForm';
import { ResetPasswordForm } from './ResetPasswordForm';

export default {
  title: 'Domains/ResetPassword/ResetPasswordForm',
  component: ResetPasswordForm,
  parameters: {
    docs: { page: WithoutStories },
    msw: { handlers: [...login] },
  },
} as ComponentMeta<typeof ResetPasswordForm>;

const Template: ComponentStory<typeof ResetPasswordForm> = () => (
  <ResetPasswordForm />
);

export const DefaultForm = Template.bind({});
DefaultForm.args = {};

export const CorrectForm = Template.bind({});
CorrectForm.args = {};
CorrectForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailField = await canvas.findByRole('textbox', { name: /e-mail/i });
  await user.type(emailField, 'jane.doe@mail.com', { delay: 100 });
  const submitButton = await canvas.findByRole('button', {
    name: /^login$/i,
  });
  await user.click(submitButton);
  const emailError = canvas.queryByText(new RegExp(messages.email.format));

  await expect(emailField).toBeValid();
  await expect(emailError).not.toBeInTheDocument();
};

export const IncorrectForm = Template.bind({});
IncorrectForm.args = {};
IncorrectForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailField = await canvas.findByRole('textbox', { name: /e-mail/i });
  await user.type(emailField, 'jane.doe', { delay: 100 });
  const submitButton = await canvas.findByRole('button', {
    name: /^login$/i,
  });
  await user.click(submitButton);
  const emailError = await canvas.findByText(new RegExp(messages.email.format));

  await expect(emailField).toBeInvalid();
  await expect(emailError).toBeInTheDocument();
};
