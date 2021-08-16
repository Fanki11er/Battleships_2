import { Meta, Story } from '@storybook/react';
import UserNameForm from './UserNameForm';

export default {
  title: '/Components/Organisms/UserNameForm',
  component: UserNameForm,
} as Meta;

export const Default: Story = (args) => <UserNameForm />;
