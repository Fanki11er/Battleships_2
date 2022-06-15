import { Meta, Story } from '@storybook/react';
import { shipsLeftListElement } from '../../../Types/types';
import ShipsLeftList from './ShipsLeftList';

export default {
  title: '/Components/Molecules/ShipsLeftList',
  component: ShipsLeftList,
} as Meta;

const mockedShipsLeftList = [
  {
    id: '1',
    size: 2,
    isSunk: false,
  } as shipsLeftListElement,
  {
    id: '2',
    size: 3,
    isSunk: true,
  } as shipsLeftListElement,
  {
    id: '3',
    size: 4,
    isSunk: false,
  } as shipsLeftListElement,
  {
    id: '4',
    size: 5,
    isSunk: false,
  } as shipsLeftListElement,
  {
    id: '5',
    size: 5,
    isSunk: true,
  } as shipsLeftListElement,
];

export const Default: Story = () => <ShipsLeftList shipsLeft={mockedShipsLeftList} owner={'ME'} />;
