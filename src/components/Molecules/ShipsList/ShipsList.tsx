import { useContext } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ShipListCreator, ShipsToTake } from '../../../Data/shipsList';
import { ShipsContext } from '../../../providers/shipsProvider';
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

type Props = {};
const ShipsList = (props: Props) => {
  const { shipsToTake } = useContext(ShipsContext);

  const renderShips = (shipsToTake: ShipsToTake[]) => {
    return shipsToTake.map(({ size, id }) => {
      return (
        <ListElement>
          <Ship size={size} position={'horizontal'} identifier={id} />
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
