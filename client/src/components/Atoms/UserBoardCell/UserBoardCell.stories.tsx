import { Meta, Story, Args } from '@storybook/react';
import { BattleShip } from '../../../Class/BattleShip';
import UserBoardCell from './UserBoardCell';

export default {
  title: '/Components/Atoms/UserBoardCell',
  component: UserBoardCell,
} as Meta;
export const SmallHorizontal: Story = (args: Args) => <UserBoardCell ship={new BattleShip(2, { x: 3, y: 0 }, 'horizontal')} />;
export const SmallVertical: Story = (args: Args) => <UserBoardCell ship={new BattleShip(2, { x: 3, y: 0 }, 'vertical')} />;
export const MediumHorizontal: Story = (args: Args) => <UserBoardCell ship={new BattleShip(3, { x: 3, y: 0 }, 'horizontal')} />;
export const MediumVertical: Story = (args: Args) => <UserBoardCell ship={new BattleShip(3, { x: 3, y: 0 }, 'vertical')} />;
export const LargeHorizontal: Story = (args: Args) => <UserBoardCell ship={new BattleShip(4, { x: 3, y: 0 }, 'horizontal')} />;
export const LargeVertical: Story = (args: Args) => <UserBoardCell ship={new BattleShip(4, { x: 3, y: 0 }, 'vertical')} />;
export const VeryLargeHorizontal: Story = (args: Args) => <UserBoardCell ship={new BattleShip(5, { x: 3, y: 0 }, 'horizontal')} />;
export const VeryLargeVertical: Story = (args: Args) => <UserBoardCell ship={new BattleShip(5, { x: 3, y: 0 }, 'vertical')} />;
