import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { shipsLeftListElement } from '../../../Types/types';
import ShipsLeftListShip from '../../Atoms/ShipsLeftListShip/ShipsLeftListShip';

const Wrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  backdrop-filter: blur(2px);
  background-color: ${(props: StyledProps) => props.theme.colors.transparentDarkBlue};

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    padding: 15px 0;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
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
