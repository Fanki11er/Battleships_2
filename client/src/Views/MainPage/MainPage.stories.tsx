import { Meta, Story, Args } from '@storybook/react';
import MainPage from './MainPage';
import { Empty } from '../RoomsList/RoomsList.stories';
import RoomsList from '../RoomsList/RoomsList';
import { MemoryRouter } from 'react-router';
import { routes } from '../../router/routes';
import UserProvider from '../../providers/userProvider';

export default {
  title: '/Views/MainPage',
  component: MainPage,
  subcomponents: {
    RoomsList,
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[routes.roomsList]}>
        <UserProvider default="Krzysiek">
          <Story />
        </UserProvider>
      </MemoryRouter>
    ),
  ],
} as Meta;

export const WithRooms: Story = (args: Args) => <MainPage {...args}></MainPage>;
