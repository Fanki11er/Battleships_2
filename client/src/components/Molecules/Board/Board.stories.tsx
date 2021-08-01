import { Meta, Story } from '@storybook/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ShipsProvider from '../../../providers/shipsProvider';
import Board from './Board';

export default {
  title: '/Components/Organisms/Board',
  component: Board,
} as Meta;

export const Default: Story = ({ ...args }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ShipsProvider>
        <Board {...args} />
      </ShipsProvider>
    </DndProvider>
  );
};
