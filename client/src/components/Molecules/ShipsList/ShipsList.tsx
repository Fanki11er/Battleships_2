import { useContext } from 'react';
import { ShipsToTake } from '../../../Data/shipsList';
import { ShipsContext } from '../../../providers/shipsProvider';
import Ship from '../../Atoms/Ship/Ship';
import ShipSizeInfo from '../../Atoms/ShipSizeInfo/ShipSizeInfo';
import { List, ListElement } from './ShipList.styles';

const ShipsList = () => {
  const { shipsToTake, handleShipRotate } = useContext(ShipsContext);
  console.log(shipsToTake);
  const renderShips = (shipsToTake: ShipsToTake[]) => {
    return shipsToTake.map(({ size, id, position }) => {
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
