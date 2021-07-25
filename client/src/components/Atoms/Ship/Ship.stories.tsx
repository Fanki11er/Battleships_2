import { Meta, Story } from '@storybook/react';
import Ship from './Ship';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export default {
  title: '/Components/Molecules/Ship',
  component: Ship,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
} as Meta;
export const ShipBox: Story = (args) => <Ship size={0} position={'horizontal'} {...args} />;
export const Size2Horizontal: Story = (args) => <Ship size={2} position={'horizontal'} isDraggable={true} {...args} />;
export const Size2Vertical: Story = (args) => <Ship size={2} position={'vertical'} isDraggable={true} {...args} />;
export const Size3Horizontal: Story = (args) => <Ship size={3} position={'horizontal'} isDraggable={true} {...args} />;
export const Size3Vertical: Story = (args) => <Ship size={3} position={'vertical'} isDraggable={true} {...args} />;
export const Size4Horizontal: Story = (args) => <Ship size={4} position={'horizontal'} isDraggable={true} {...args} />;
export const Size4Vertical: Story = (args) => <Ship size={4} position={'vertical'} isDraggable={true} {...args} />;
export const Size5Horizontal: Story = (args) => <Ship size={5} position={'horizontal'} isDraggable={true} {...args} />;
export const Size5Vertical: Story = (args) => <Ship size={5} position={'vertical'} isDraggable={true} {...args} />;
