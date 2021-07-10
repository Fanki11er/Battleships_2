import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ShipListCreator, ShipsToTake } from '../../../Data/shipsList';
import Ship from '../../Atoms/Ship/Ship';
const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  border: 2px solid black;
  margin: 15px;
  padding: 15px;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const ListElement = styled.li`
  width: 100%;
  height: 100px;
  margin: 10px;
`;

type Props = {
  shipsList: ShipListCreator[];
};
const ShipsList = (props: Props) => {
  const { shipsList } = props;

  const [shipsToTake, setShipsToTake] = useState<ShipsToTake[]>([]);

  useEffect(() => {
    setShipsToTake(createShipsList(shipsList));
  }, [shipsList]);

  const renderShips = (shipsToTake: ShipsToTake[]) => {
    return shipsToTake.map(({ size }) => {
      return (
        <ListElement>
          <Ship size={size} position={'horizontal'} />
        </ListElement>
      );
    });
  };

  const createShipsList = (shipsList: ShipListCreator[]) => {
    const createdShipSList: ShipsToTake[] = [];
    let counter = 0;
    for (let i = 0; i < shipsList.length; i++) {
      for (let j = 0; j < shipsList[i].quantity; j++) {
        createdShipSList.push({ size: shipsList[i].size, id: counter });
        counter++;
      }
    }
    return createdShipSList;
  };
  return (
    <Wrapper>
      <List>{renderShips(shipsToTake)}</List>
    </Wrapper>
  );
};

export default ShipsList;
