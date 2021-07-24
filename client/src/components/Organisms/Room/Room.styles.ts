import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 250px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
  margin: 25px;
`;

export const RoomName = styled.div`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
  color: ${(props: StyledProps) => props.theme.colors.green};
  text-align: center;
  font-family: 'Montserrat';
  font-weight: bold;
  user-select: none;
`;

export const UserSlotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
