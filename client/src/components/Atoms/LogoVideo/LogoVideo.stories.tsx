import { Meta, Story, Args } from '@storybook/react';
import LogoVideo from './LogoVideo';

export default {
  title: '/Components/Atoms/LogoVideo',
  component: LogoVideo,
} as Meta;

export const Default: Story = (args: Args) => <LogoVideo {...args} />;
