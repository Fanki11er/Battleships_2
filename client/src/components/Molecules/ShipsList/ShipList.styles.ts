import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

export const List = styled.ul`
  width: fit-content;
  padding: 0 50px;
  width: 90%;
  max-width: 550px;
  height: 130px;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;

  @media screen and (max-width: 560px) {
    flex-flow: wrap row;
    width: 95%;
    padding: 0 10px;
    height: auto;
  }
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
  margin: 0 25px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    //border: 2px solid rgba(1, 1, 1, 0.05);
    border-radius: 15px;
    position: absolute;
    left: auto;
    top: auto;
    background: linear-gradient(-45deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.35));
    z-index: 0;
  }

  @media screen and (max-width: 560px) {
    margin: 10px 5px;
  }
`;
