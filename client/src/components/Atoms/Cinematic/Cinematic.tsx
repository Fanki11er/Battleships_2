import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  border-radius: 20px;
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
`;
const Cinematic = () => <Wrapper></Wrapper>;

export default Cinematic;
