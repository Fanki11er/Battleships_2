import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  user-select: none;
  grid-column: 3/3;
  @media screen and (max-width: 600px) {
    grid-column: 2/3;
  }
`;
const Version = styled.span`
  color: ${(props: StyledProps) => props.theme.colors.green};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.M};
  margin: 0 15px 0 0;
  @media screen and (max-width: 860px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.S};
  }
  @media screen and (max-width: 600px) {
    font-size: ${(props: StyledProps) => props.theme.fontSizes.XS};
  }
`;

const Year = styled(Version)`
  color: ${(props: StyledProps) => props.theme.colors.myBlue};
  margin: 0 25px 0 0px;
`;

export type Props = {
  version: string;
  year: string;
};

const VersionInfo = (props: Props) => {
  const { version, year } = props;
  return (
    <Wrapper>
      <Version>{`ver: ${version}`}</Version>
      <Year>{year}</Year>
    </Wrapper>
  );
};

export default VersionInfo;
