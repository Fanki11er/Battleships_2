import { Meta, Story, Args } from '@storybook/react';
import { User } from '../../../Types/types';
import PreparingPageStatusInfo from './PreparingPageStatusInfo';

export default {
  title: '/Components/Atoms/PreparingPageStatusInfo',
  component: PreparingPageStatusInfo,
} as Meta;
const firstSocketId = 'ffbacd';
const secondSocketId = 'aabbve';

const Template: Story = (args: Args) => <PreparingPageStatusInfo sortedUsers={{ me: undefined, opponent: undefined }} {...args} />;

export const WithOneUser = Template.bind({});

WithOneUser.args = {
  users: [
    {
      name: 'Krzysztof',
      status: 'preparing',
      id: firstSocketId,
    } as User,
  ],
  socketId: firstSocketId,
};
export const WithTwoUsersOpponentReady = Template.bind({});

WithTwoUsersOpponentReady.args = {
  users: [
    {
      name: 'Krzysztof',
      status: 'preparing',
      id: firstSocketId,
    } as User,
    {
      name: 'Marcin',
      status: 'ready',
      id: secondSocketId,
    } as User,
  ],
  socketId: firstSocketId,
};

export const WithTwoUsersOpponentReadyDifferentOrder = Template.bind({});

WithTwoUsersOpponentReadyDifferentOrder.args = {
  users: [
    {
      name: 'Krzysztof',
      status: 'preparing',
      id: firstSocketId,
    } as User,
    {
      name: 'Marcin',
      status: 'ready',
      id: secondSocketId,
    } as User,
  ],
  socketId: secondSocketId,
};
