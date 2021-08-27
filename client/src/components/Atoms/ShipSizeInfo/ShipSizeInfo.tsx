import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  z-index: 2;
`;

const Marker = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  margin-right: 5px;
`;

export const StoryWrapper = styled.div`
  width: 120px;
  height: 20px;
  background-color: ${(props: StyledProps) => props.theme.colors.water};
`;

type Props = {
  size: number;
};
const ShipSizeInfo = (props: Props) => {
  const { size } = props;
  const renderMarkers = (size: number) => {
    const markers = [];
    for (let i = 0; i < size; i++) {
      markers.push(<Marker key={i} />);
    }
    return markers;
  };
  return <Wrapper>{renderMarkers(size)}</Wrapper>;
};

export default ShipSizeInfo;
