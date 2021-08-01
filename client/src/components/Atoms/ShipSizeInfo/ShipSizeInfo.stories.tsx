import { Meta, Story, Args } from '@storybook/react';
import ShipSizeInfo, { StoryWrapper } from './ShipSizeInfo';

export default {
  title: '/Components/Atoms/ShipSizeInfo',
  component: ShipSizeInfo,
} as Meta;
export const Size2: Story = (args: Args) => {
  return (
    <StoryWrapper>
      <ShipSizeInfo size={2} {...args} />
    </StoryWrapper>
  );
};

export const Size3: Story = (args: Args) => {
  return (
    <StoryWrapper>
      <ShipSizeInfo size={3} {...args} />
    </StoryWrapper>
  );
};

export const Size4: Story = (args: Args) => {
  return (
    <StoryWrapper>
      <ShipSizeInfo size={4} {...args} />
    </StoryWrapper>
  );
};

export const Size5: Story = (args: Args) => {
  return (
    <StoryWrapper>
      <ShipSizeInfo size={5} {...args} />
    </StoryWrapper>
  );
};
