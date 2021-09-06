import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';
import { ReactComponent as IconEmpty } from '../../../assets/icons/icon-forbidden.svg';

export const Wrapper = styled.div`
  width: 165px;
  height: 40px;
  display: flex;
  padding: 0 20px;
  border-radius: 10px;
  border: 2px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  justify-content: flex-start;
  align-items: center;
  font-family: 'Montserrat';
  user-select: none;

  @media screen and (min-width: 3000px) {
    width: 270px;
    height: 70px;
    padding: 0 35px;
  }

  @media screen and (max-width: 860px) {
    width: 150px;
  }

  @media screen and (max-width: 560px) {
    width: 45%;
    height: 30px;
    border-radius: 5px;
    padding: 0 5%;
    justify-content: space-around;
  }
`;

export const Label = styled.div`
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  font-weight: bold;
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
  text-transform: uppercase;
  margin-left: 30px;
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
    margin-left: 45px;
  }

  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  }

  @media screen and (max-width: 560px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XS};
    margin-left: 5px;
  }
`;

export const StyledEmptyIcon = styled(IconEmpty)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 3000px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 560px) {
    width: 15px;
    height: 15px;
  }
`;
