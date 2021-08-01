import { Meta, Story, Args } from '@storybook/react';
import VersionInfo from './VersionInfo';

export default {
  title: '/Components/Atoms/VersionInfo',
  component: VersionInfo,
} as Meta;

export const Default: Story = (args: Args) => <VersionInfo version={'1.05'} year={'2021'} {...args} />;
