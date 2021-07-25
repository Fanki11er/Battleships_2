import { useContext } from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { ShipsToTake } from '../../../Data/shipsList';
import { ShipsContext } from '../../../providers/shipsProvider';
import Ship from '../../Atoms/Ship/Ship';
import ShipSizeInfo from '../../Atoms/ShipSizeInfo/ShipSizeInfo';
/*const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid black;
  margin: 15px;
  padding: 15px;
`;*/

const List = styled.ul`
  width: 90%;
  height: 130px;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
`;

const ListElement = styled.li`
  width: 120px;
  height: 120px;
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const ShipsList = () => {
  const { shipsToTake, handleShipRotate } = useContext(ShipsContext);

  const renderShips = (shipsToTake: ShipsToTake[]) => {
    return shipsToTake.map(({ size, id, position }) => {
      console.log(shipsToTake);
      return (
        <ListElement key={id}>
          <ShipSizeInfo size={size} />
          <Ship size={size} position={position} identifier={id} isDraggable={true} handleShipRotate={handleShipRotate} />
        </ListElement>
      );
    });
  };

  return <List>{renderShips(shipsToTake)}</List>;
};

export default ShipsList;
