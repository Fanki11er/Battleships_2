import React, { useEffect, useState } from 'react';
import { HelpPage } from '../../../Types/types';
import { PageControlButton, SmallCancelButton } from '../../Atoms/Buttons/Buttons';
import DotsIndicator from '../DotsIndicator/DotsIndicator';

import { ControlsWrapper, HelpContentWrapper, HelpImage, HelpSectionWrapper, HelpText } from './HelpSection.styles';

type HelpSectionProps = {
  helpPages: HelpPage[];
  isVisible: boolean;
  closeModal: () => void;
};

const HelpSection = (props: HelpSectionProps & React.PropsWithChildren<React.ReactNode>) => {
  const { helpPages, closeModal, isVisible } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState<null | number>(null);

  useEffect(() => {
    if (!isVisible && pageNumber > 0) {
      setPageNumber(0);
    }
  }, [isVisible, pageNumber]);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchStartPosition(touchDown);
    e.stopPropagation();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    const touchDown = touchStartPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextPage();
    }

    if (diff < -5) {
      prevPage();
    }

    setTouchStartPosition(null);
  };

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
    <HelpSectionWrapper onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)} onClick={(e) => e.stopPropagation()}>
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
