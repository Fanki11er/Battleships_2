import { Meta, Story, Args } from '@storybook/react';
import LoadingInfo from './LoadingInfo';

export default {
  title: '/Components/Atoms/LoadingInfo',
  component: LoadingInfo,
} as Meta;

export const Default: Story = (args: Args) => <LoadingInfo />;
