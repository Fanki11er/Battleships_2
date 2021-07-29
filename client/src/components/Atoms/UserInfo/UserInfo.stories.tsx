import { Meta, Story, Args } from '@storybook/react';
import UserInfo from './UserInfo';

export default {
  title: '/Components/Atoms/UserInfo',
  component: UserInfo,
} as Meta;
export const Default: Story = (args: Args) => <UserInfo userName={'Krzysiek'} />;
