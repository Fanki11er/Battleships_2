import { StandardButton } from './Buttons';
import { Meta, Story } from '@storybook/react';

export default {
  title: '/Components/Atoms/Buttons',
  component: StandardButton,
} as Meta;

const Template: Story = (args) => <StandardButton {...args}>Join room</StandardButton>;

export const Button = Template.bind({});
