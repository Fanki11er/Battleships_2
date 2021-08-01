import { Meta, Story } from '@storybook/react';
import { LargeShip, MediumShip, SmallShip, VeryLargeShip } from './ShipsImages';

export default {
  title: '/Components/Atoms/ShipsImages',
  component: SmallShip,
} as Meta;

export const ShipSizeTwo: Story = (args) => <SmallShip />;
export const ShipSizeThree: Story = (args) => <MediumShip />;
export const ShipSizeFour: Story = (args) => <LargeShip />;
export const ShipSizeFive: Story = (args) => <VeryLargeShip />;
