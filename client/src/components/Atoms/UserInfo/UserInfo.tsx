import styled from 'styled-components';
import image from '../../../assets/Images/UserImage.svg';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  justify-self: flex-end;
  @media screen and (min-width: 3000px) {
    width: 300px;
  }

  @media screen and (max-width: 1540px) {
    width: 150px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices}) {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

const StyledImage = styled.img`
  margin-right: 20px;
  align-self: center;
  @media screen and (min-width: 3000px) {
    width: 25%;
    height: 25%;
    margin-right: 30px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: 20%;
    height: 20%;
    margin-right: 15px;
  }
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
  }
  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  }
`;

const RoomName = styled.div`
  font-weight: bold;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  }
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
