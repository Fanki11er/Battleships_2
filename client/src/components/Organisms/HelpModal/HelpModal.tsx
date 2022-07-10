import React, { useEffect } from 'react';
import { HelpPage } from '../../../Types/types';
import HelpSection from '../../Molecules/HelpSection/HelpSection';
import { HelpModalWrapper } from './HelpModal,styles';

type HelpModalProps = {
  helpPages: HelpPage[];
  isOpen: boolean;
  closeModal: () => void;
};

const HelpModal = (props: HelpModalProps) => {
  const { helpPages, isOpen, closeModal } = props;

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', (e) => close(e));
    return () => window.removeEventListener('keydown', (e) => close(e));
  }, [closeModal]);

  return (
    <HelpModalWrapper isOpen={isOpen} onClick={() => closeModal()} onTouchStart={() => closeModal()}>
      <HelpSection helpPages={helpPages} closeModal={closeModal} isVisible={isOpen} />
    </HelpModalWrapper>
  );
};

export default HelpModal;
