import { Meta, Story } from '@storybook/react';
import TopWrapper from './TopWrapper';

export default {
  title: '/Components/Molecules/TopWrapper',
  component: TopWrapper,
} as Meta;

export const Default: Story = (args) => <TopWrapper {...args} />;
