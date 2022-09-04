import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from 'components/UI/Icon';
import { Button, EButtonVariant, EIconAlignment } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Click me!',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Click me!',
  variant: EButtonVariant.secondary,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  label: 'Click me!',
  outlined: true,
};

export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
  icon: <Icon name="circle-xmark" />,
  iconAlignment: EIconAlignment.left,
  label: 'Click me!',
};

export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  icon: <Icon name="circle-xmark" />,
  label: 'Click me!',
};
