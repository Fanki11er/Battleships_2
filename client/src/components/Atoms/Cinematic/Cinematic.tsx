import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 1200px;
  height: 675px;
  border: 3px solid ${(props: StyledProps) => props.theme.colors.myBlue};
  border-radius: 20px;
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  overflow: hidden;

  @media screen and (${(props: StyledProps) => props.theme.devices.large}) {
    width: 950px;
    height: 534px;
  }

  @media screen and (${(props: StyledProps) => props.theme.devices.medium}) {
    width: 600px;
    height: 337px;
  }
  @media screen and (${(props: StyledProps) => props.theme.devices.small}) {
    min-width: 300px;
    width: 95%;
    max-width: 450px;
    min-height: 168px;
    height: 60%;
    max-height: 300px;
  }
`;
const Cinematic = () => {
  return (
    <Wrapper>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/cSSgVcRk7to"
        title="Battleships intro"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

export default Cinematic;
