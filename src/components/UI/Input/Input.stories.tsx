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
  id: 'first-name',
  label: 'First name',
};

export const InputWithHelperText = Template.bind({});
InputWithHelperText.args = {
  id: 'last-name',
  helperText: 'Enter your last name.',
  label: 'Last name',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  id: 'address',
  error: 'Please enter your address!',
  label: 'Address',
};

export const InputWithErrorAndIcon = Template.bind({});
InputWithErrorAndIcon.args = {
  id: 'search',
  error: 'Invalid search query.',
  label: 'Search',
  icon: <Icon name="magnifying-glass" />,
};
