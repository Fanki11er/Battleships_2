import { shipsLeftListElement } from '../../../Types/types';
import ShipsLeftListShip from '../../Atoms/ShipsLeftListShip/ShipsLeftListShip';
import { Wrapper } from './ShipsLeftList.styles';

type Props = {
  shipsLeft: shipsLeftListElement[];
  owner: 'ME' | 'OPPONENT';
};
const ShipsLeftList = (props: Props) => {
  const { shipsLeft, owner } = props;
  const renderElements = (shipsLeft: shipsLeftListElement[]) => {
    return shipsLeft.length
      ? shipsLeft.map(({ size, isSunk, id }) => {
          return <ShipsLeftListShip size={size} isSunk={isSunk} key={id} />;
        })
      : null;
  };

  return <Wrapper owner={owner}>{renderElements(shipsLeft)}</Wrapper>;
};

export default ShipsLeftList;
