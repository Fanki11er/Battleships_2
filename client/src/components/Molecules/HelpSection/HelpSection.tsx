import { useState } from 'react';
import { HelpPage } from '../../../Types/types';
import { PageControlButton, SmallCancelButton } from '../../Atoms/Buttons/Buttons';
import DotsIndicator from '../DotsIndicator/DotsIndicator';

import { ControlsWrapper, HelpContentWrapper, HelpImage, HelpSectionWrapper, HelpText } from './HelpSection.styles';

type HelpSectionProps = {
  helpPages: HelpPage[];
  closeModal: () => void;
};

const HelpSection = (props: HelpSectionProps) => {
  const { helpPages, closeModal } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const nextPage = () => {
    if (pageNumber < helpPages.length - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <HelpSectionWrapper>
      <HelpContentWrapper>
        <HelpText>{helpPages[pageNumber].helpText}</HelpText>
        <HelpImage src={helpPages[pageNumber].imageSrc} />
      </HelpContentWrapper>
      <ControlsWrapper>
        <PageControlButton isActive={pageNumber > 0 ? true : false} onClick={() => prevPage()}>
          Prev
        </PageControlButton>
        <DotsIndicator length={helpPages.length} progress={pageNumber} />
        <PageControlButton isActive={pageNumber < helpPages.length - 1 ? true : false} onClick={() => nextPage()}>
          Next
        </PageControlButton>
      </ControlsWrapper>
      <SmallCancelButton
        isActive={true}
        onClick={() => {
          closeModal();
          setPageNumber(0);
        }}
      >
        Close
      </SmallCancelButton>
    </HelpSectionWrapper>
  );
};

export default HelpSection;
