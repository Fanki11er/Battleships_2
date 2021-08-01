import { Meta, Story, Args } from '@storybook/react';
import UserProvider from '../../providers/userProvider';
import PreparingPage from './PreparingPage';

export default {
  title: '/Views/PreparingPage',
  component: PreparingPage,

  decorators: [
    (Story) => (
      <UserProvider default="Krzysiek">
        <Story />
      </UserProvider>
    ),
  ],
} as Meta;

export const Default: Story = (args: Args) => {
  return <PreparingPage {...args} />;
};
