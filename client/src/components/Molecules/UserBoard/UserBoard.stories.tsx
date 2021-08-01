import { Meta, Story } from '@storybook/react';
import { BattleShip } from '../../../Class/BattleShip';
import UserBoard from './UserBoard';

const mockedShips = [
  new BattleShip(4, { x: 4, y: 2 }, 'horizontal'),
  new BattleShip(5, { x: 3, y: 8 }, 'horizontal'),
  new BattleShip(4, { x: 8, y: 1 }, 'vertical'),
  new BattleShip(3, { x: 1, y: 10 }, 'horizontal'),
  new BattleShip(2, { x: 1, y: 1 }, 'vertical'),
];

export default {
  title: '/Components/Organisms/UserBoard',
  component: UserBoard,
} as Meta;

export const Default: Story = (args) => <UserBoard ships={mockedShips} boardSize={10} {...args} />;
