import { Meta, Story } from '@storybook/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ShipsProvider from '../../../providers/shipsProvider';
import ShipsList from './ShipsList';

export default {
  title: '/Components/Molecules/ShipList',
  component: ShipsList,
} as Meta;

export const Default: Story = ({ ...args }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ShipsProvider>
        <ShipsList {...args} />
      </ShipsProvider>
    </DndProvider>
  );
};
