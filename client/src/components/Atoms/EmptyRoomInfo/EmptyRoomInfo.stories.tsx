import { Meta, Story } from '@storybook/react';
import EmptyRoomInfo from './EmptyRoomInfo';

export default {
  title: '/Components/Atoms/EmptyRoomInfo',
  component: EmptyRoomInfo,
} as Meta;

const Template: Story = (args) => <EmptyRoomInfo {...args} />;

export const Default = Template.bind({});
