import { Meta, Story } from '@storybook/react';
import RoomUserInfo from './RoomUserInfo';

export default {
  title: '/Components/Atoms/RoomUserInfo',
  component: RoomUserInfo,
} as Meta;

const Template: Story = (args) => <RoomUserInfo userName={'Krzysiek'} userStatus={'preparing'} {...args} />;

export const Default = Template.bind({});

export const ComputerPlayer = Template.bind({});
ComputerPlayer.args = {
  isComputer: true,
  userName: 'AI',
};
