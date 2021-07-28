import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type Props = {
  numberOfElements: number;
};

export const List = styled.ul`
  width: calc(${(props: Props) => props.numberOfElements}* 120px + ${(props: Props) => (props.numberOfElements > 5 ? '500px' : '250px')});
  max-width: 90%;
  height: 130px;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
`;

export const ListElement = styled.li`
  width: 120px;
  height: 120px;
  background-color: ${(props: StyledProps) => props.theme.colors.water};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
