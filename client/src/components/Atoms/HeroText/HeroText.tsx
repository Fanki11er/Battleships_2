import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  user-select: none;
`;

const Header = styled.h1`
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.orange};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.XXXL};
  opacity: 0.9;
  font-weight: bold;
  letter-spacing: 2px;
  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XXXXL};
    margin: 0 30px;
  }

  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
    margin: 0 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.L};
    margin: 0 10px;
  }
`;

const SubHeader = styled.h2`
  text-align: center;
  color: ${(props: StyledProps) => props.theme.colors.orange};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.XL};
  opacity: 0.8;
  margin: 0;

  @media screen and (min-width: 3000px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XXL};
    margin: 20px;
  }
  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  }
  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
    margin: 0 5px;
  }
`;

const HeroText = () => (
  <Wrapper>
    <Header>Free browser multiplayer battleships game</Header>
    <SubHeader>Captain join and check yourself in epic naval battle</SubHeader>
  </Wrapper>
);

export default HeroText;
