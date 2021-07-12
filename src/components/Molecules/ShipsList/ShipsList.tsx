import { useContext } from 'react';
import styled from 'styled-components';
import { ShipsToTake } from '../../../Data/shipsList';
import { ShipsContext } from '../../../providers/shipsProvider';
import Ship from '../../Atoms/Ship/Ship';
const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid black;
  margin: 15px;
  padding: 15px;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
`;

const ListElement = styled.li`
  width: 250px;
  height: 250px;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShipsList = () => {
  const { shipsToTake, handleShipRotate } = useContext(ShipsContext);

  const renderShips = (shipsToTake: ShipsToTake[]) => {
    return shipsToTake.map(({ size, id, position }) => {
      return (
        <ListElement>
          <Ship size={size} position={position} identifier={id} isDraggable={true} handleShipRotate={handleShipRotate} />
        </ListElement>
      );
    });
  };

  return (
    <Wrapper>
      <List>{renderShips(shipsToTake)}</List>
    </Wrapper>
  );
};

export default ShipsList;
