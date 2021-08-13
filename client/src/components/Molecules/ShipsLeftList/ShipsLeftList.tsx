import styled from 'styled-components';
import { shipsLeftListElement } from '../../../Types/types';
import ShipsLeftListShip from '../../Atoms/ShipsLeftListShip/ShipsLeftListShip';

const Wrapper = styled.ul`
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
type Props = {
  shipsLeft: shipsLeftListElement[];
};
const ShipsLeftList = (props: Props) => {
  const { shipsLeft } = props;
  const renderElements = (shipsLeft: shipsLeftListElement[]) => {
    return shipsLeft.length
      ? shipsLeft.map(({ size, isSunk, id }) => {
          return <ShipsLeftListShip size={size} isSunk={isSunk} key={id} />;
        })
      : null;
  };

  return <Wrapper>{renderElements(shipsLeft)}</Wrapper>;
};

export default ShipsLeftList;
