import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const SmallLogo = Template.bind({});
SmallLogo.args = {
  hasLink: false,
  size: Logo.size.small,
};

export const MediumLogo = Template.bind({});
MediumLogo.args = {
  hasLink: false,
  size: Logo.size.medium, // default
};

export const BigLogo = Template.bind({});
BigLogo.args = {
  hasLink: false,
  size: Logo.size.big,
};

export const RedirectLogo = Template.bind({});
RedirectLogo.args = {
  hasLink: true, // default
};

export const SimplyLogo = Template.bind({});
SimplyLogo.args = {
  hasLink: false,
};
