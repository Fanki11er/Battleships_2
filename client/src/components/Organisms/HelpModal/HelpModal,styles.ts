import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

type ModalProps = {
  isOpen: boolean;
};

export const HelpModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: ${(props: StyledProps) => props.theme.colors.transparentDarkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props: ModalProps & StyledProps) => (props.isOpen ? 'translateX(0)' : 'translateX(200%)')};
  transition: all 0.5s;
`;
