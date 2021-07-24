import { Meta, Story, Args } from '@storybook/react';
import { User } from '../../../Types/types';
import PreparingPageStatusInfo from './PreparingPageStatusInfo';

export default {
  title: '/Components/Atoms/PreparingPageStatusInfo',
  component: PreparingPageStatusInfo,
} as Meta;
const socketId = 'ffbacd';
const withOneUserMock = [
  {
    name: 'Krzysztof',
    status: 'preparing',
    id: socketId,
  } as User,
];

export const Template: Story = (args: Args) => <PreparingPageStatusInfo {...args} />;

export const WithOneUser = Template.bind({});

WithOneUser.args = {};
