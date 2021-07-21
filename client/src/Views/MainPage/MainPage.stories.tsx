import { Meta, Story } from '@storybook/react';
import MainPage from './MainPage';
import RoomsList from '../RoomsList/RoomsList';

export default {
  title: '/Views/MainPage',
  component: MainPage,
  subcomponents: {
    RoomsList,
  },
} as Meta;

export const Empty: Story = (args) => <MainPage />;
