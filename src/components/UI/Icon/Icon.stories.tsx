import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'UI/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  name: 'stethoscope',
};

export const ClickableIcon = Template.bind({});
ClickableIcon.args = {
  name: 'wand-magic-sparkles',
};
ClickableIcon.argTypes = {
  onClick: { action: 'clicked' },
};
