import { Meta, Story } from '@storybook/react';
import AppLogo from './AppLogo';

export default {
  title: '/Components/Atoms/AppLogo',
  component: AppLogo,
} as Meta;

export const Default: Story = (args) => <AppLogo {...args} />;
