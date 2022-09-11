import { ComponentStory, ComponentMeta } from '@storybook/react';

import { expect, within, user } from 'utils/plays';
import { StorybookWrapper } from 'components/layouts/StorybookWrapper';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'UI/PasswordInput',
  component: PasswordInput,
  decorators: [
    (Story) => (
      <StorybookWrapper>
        <Story />
      </StorybookWrapper>
    ),
  ],
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);

export const DefaultPasswordInput = Template.bind({});
DefaultPasswordInput.args = {
  id: 'password',
  label: 'Password',
};
DefaultPasswordInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const passwordField = await canvas.findByLabelText(/password/i);
  await user.type(passwordField, 'SomePassword', { delay: 100 });

  await expect(passwordField).toHaveAttribute('type', 'password');
};

export const VisiblePasswordInput = Template.bind({});
VisiblePasswordInput.args = {
  id: 'password',
  label: 'Password',
};
VisiblePasswordInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const passwordField = await canvas.findByLabelText(/password/i);
  await user.type(passwordField, 'SomePassword', { delay: 100 });
  const showPasswordIcon = await canvas.findByTestId('show-password');
  await user.click(showPasswordIcon);

  await expect(passwordField).toHaveAttribute('type', 'text');
};
