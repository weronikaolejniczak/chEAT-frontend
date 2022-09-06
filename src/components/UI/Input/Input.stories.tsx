import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StorybookWrapper } from 'components/layouts/StorybookWrapper';
import { Icon } from '../Icon';
import { Input } from './Input';

export default {
  title: 'UI/Input',
  component: Input,
  decorators: [
    (Story) => (
      <StorybookWrapper>
        <Story />
      </StorybookWrapper>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  id: 'name',
  label: 'Name',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: 'name',
  label: 'Name',
  icon: <Icon name="eye" onClick={() => console.log('Show password')} />,
};

export const InputWithHelperText = Template.bind({});
InputWithHelperText.args = {
  id: 'name',
  helperText: 'Enter your first name.',
  label: 'Name',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  id: 'name',
  error: 'Some error text!',
  label: 'Name',
};

export const InputWithErrorAndIcon = Template.bind({});
InputWithErrorAndIcon.args = {
  id: 'name',
  error: 'Some error text!',
  label: 'Name',
  icon: <Icon name="eye" onClick={() => console.log('Show password')} />,
};
