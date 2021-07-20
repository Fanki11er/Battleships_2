import { Meta, Story, Args } from '@storybook/react';
import Footer from './Footer';

export default {
  title: '/Components/Molecules/Footer',
  component: Footer,
} as Meta;

export const Default: Story = (args: Args) => <Footer {...args} />;
