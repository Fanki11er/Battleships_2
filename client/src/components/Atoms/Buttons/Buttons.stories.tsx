import { StandardButton } from './Buttons';
import { Meta, Story } from '@storybook/react';

export default {
  title: '/Components/Atoms/Buttons',
  component: StandardButton,
} as Meta;

const Template: Story = (args) => (
  <StandardButton isActive={true} {...args}>
    Join room
  </StandardButton>
);

export const Button = Template.bind({});

export const NotActive = Template.bind({});
NotActive.args = {
  isActive: false,
};
