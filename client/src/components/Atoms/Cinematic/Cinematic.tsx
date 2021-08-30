import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  border-radius: 20px;
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};

  @media screen and (max-width: 860px) {
    width: 500px;
    height: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
`;
const Cinematic = () => <Wrapper></Wrapper>;

export default Cinematic;
