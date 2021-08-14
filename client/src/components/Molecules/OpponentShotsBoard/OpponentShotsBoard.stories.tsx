import { Meta, Story } from '@storybook/react';
import { ShotResult } from '../../../Types/types';
import OpponentShotsBoard from './OpponentShotsBoard';

export default {
  title: '/Components/Organisms/OpponentShotsBoard',
  component: OpponentShotsBoard,
} as Meta;

const mockedShots: ShotResult[] = [
  {
    coordinates: {
      x: 0,
      y: 0,
    },
    status: 'miss',
    userId: '0',
    sunkShip: 0,
    id: '0',
  },
  {
    coordinates: {
      x: 0,
      y: 1,
    },
    status: 'hit',
    userId: '0',
    id: '1',
    sunkShip: 0,
  },
];

export const Default: Story = () => <OpponentShotsBoard shots={mockedShots} boardSize={10} />;
