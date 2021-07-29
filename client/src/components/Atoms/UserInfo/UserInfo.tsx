import styled from 'styled-components';
import image from '../../../assets/Images/UserImage.svg';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const StyledImage = styled.img`
  margin-right: 20px;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps) => props.theme.colors.shipRectangle};
`;

type Props = {
  userName: string;
};
const UserInfo = (props: Props) => {
  const { userName } = props;
  return (
    <Wrapper>
      <StyledImage src={image} alt={'Captain image'} />
      <UserName>{userName}</UserName>
    </Wrapper>
  );
};

export default UserInfo;
