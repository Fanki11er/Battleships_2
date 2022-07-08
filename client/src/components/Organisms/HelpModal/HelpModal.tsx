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
  return (
    <HelpModalWrapper isOpen={isOpen}>
      <HelpSection helpPages={helpPages} closeModal={closeModal} />
    </HelpModalWrapper>
  );
};

export default HelpModal;
