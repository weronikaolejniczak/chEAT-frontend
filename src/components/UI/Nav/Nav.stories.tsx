import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from './Nav';

export default {
  title: 'UI/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = () => <Nav />;

export const DefaultNav = Template.bind({});
DefaultNav.args = {};
