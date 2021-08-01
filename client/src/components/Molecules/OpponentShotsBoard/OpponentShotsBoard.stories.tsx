import { Meta, Story } from '@storybook/react';
import { Shot } from '../../../Types/types';
import OpponentShotsBoard from './OpponentShotsBoard';

export default {
  title: '/Components/Organisms/OpponentShotsBoard',
  component: OpponentShotsBoard,
} as Meta;

const mockedShots: Shot[] = [
  {
    coordinates: {
      x: 0,
      y: 0,
    },
    status: 'miss',
  },
  {
    coordinates: {
      x: 0,
      y: 1,
    },
    status: 'hit',
  },
];

export const Default: Story = () => <OpponentShotsBoard shots={mockedShots} boardSize={10} />;
