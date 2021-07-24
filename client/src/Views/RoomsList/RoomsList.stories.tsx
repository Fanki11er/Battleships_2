import { Meta, Story, Args } from '@storybook/react';
import RoomsList from './RoomsList';

export default {
  title: '/Views/RoomsList',
  component: RoomsList,
} as Meta;

export const Empty: Story = (args: Args) => <RoomsList userName={'Krzysiek'} {...args} />;
