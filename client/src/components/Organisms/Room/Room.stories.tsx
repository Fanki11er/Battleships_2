import { Meta, Story } from '@storybook/react';
import { User } from '../../../Types/types';
import Room from './Room';

export default {
  title: '/Components/Organisms/Room',
  component: Room,
} as Meta;

const Template: Story = (args) => <Room roomName={'Room_#1'} users={[]} handleJoinToTheRoom={() => {}} {...args} />;

export const Default = Template.bind({});
Default.args = {
  roomName: 'Room_#1',
  users: [],
};

export const WithOneUser = Template.bind({});

WithOneUser.args = {
  roomName: 'Room_#2',
  users: [
    {
      name: 'Krzysztof',
      id: '1',
      status: 'preparing',
    },
  ] as User[],
};

export const TwoUsersWithComputer = Template.bind({});

TwoUsersWithComputer.args = {
  roomName: 'Room_#2',
  users: [
    {
      name: 'AI',
      id: '2',
      status: 'ready',
      isComputer: true,
    },
    {
      name: 'Krzysztof',
      id: '1',
      status: 'preparing',
    },
  ] as User[],
};
