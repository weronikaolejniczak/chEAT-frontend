import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StorybookWrapper } from 'components/layouts/StorybookWrapper';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'UI/Input',
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
