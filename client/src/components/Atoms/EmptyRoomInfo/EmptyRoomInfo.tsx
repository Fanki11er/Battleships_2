import { Label, StyledEmptyIcon, Wrapper } from './EmptyRoomInfo.styles';

const EmptyRoomInfo = () => {
  return (
    <Wrapper>
      <StyledEmptyIcon />
      <Label>Empty</Label>
    </Wrapper>
  );
};

export default EmptyRoomInfo;
