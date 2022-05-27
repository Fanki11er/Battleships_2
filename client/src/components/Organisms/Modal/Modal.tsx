import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { StyledProps } from '../../../assets/styles/theme';

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props: StyledProps) => props.theme.colors.darkBlue};
  opacity: 0;
  animation-name: show;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;

const modalContainer = document.getElementById('modal-container');
const Modal = (props: PropsWithChildren<ReactNode>) => {
  const { children } = props;
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer?.appendChild(modalNode);

    return () => {
      modalContainer?.removeChild(modalNode);
    };
  }, [modalNode]);

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalNode);
};

export default Modal;
