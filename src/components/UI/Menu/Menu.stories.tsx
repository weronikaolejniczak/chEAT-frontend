import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from './Menu';

export default {
  title: 'UI/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {};
