import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
  title: 'UI/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const DefaultNavLink = Template.bind({});
DefaultNavLink.args = {
  children: 'Home',
  icon: 'home',
  to: '/',
};
