import styled from 'styled-components';
import image from '../../../assets/Images/UserImage.svg';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-self: flex-end;
`;

const StyledImage = styled.img`
  margin-right: 20px;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
`;

const RoomName = styled.div`
  font-weight: bold;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
`;

const NamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

type Props = {
  userName: string;
  roomName: string;
};
const UserInfo = (props: Props) => {
  const { userName, roomName } = props;
  return (
    <Wrapper>
      <StyledImage src={image} alt={'Captain image'} />
      <NamesWrapper>
        <UserName>{userName}</UserName>
        <RoomName>{roomName}</RoomName>
      </NamesWrapper>
    </Wrapper>
  );
};

export default UserInfo;
