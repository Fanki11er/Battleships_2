import { Meta, Story } from '@storybook/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Cell from './Cell';
export default {
  title: '/Components/Atoms/Cell',
  component: Cell,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Cell coordinates={{ x: 0, y: 0 }} hasShip={false} {...args} />;

export const Default = Template.bind({});

export const WithShip = Template.bind({});

WithShip.args = {
  hasShip: true,
};
