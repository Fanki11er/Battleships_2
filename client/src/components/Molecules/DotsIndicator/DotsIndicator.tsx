import { StyledDot } from './DotsIndicator.styles';

type DotsProps = {
  length: number;
  progress: number;
};

const DotsIndicator = (props: DotsProps) => {
  const { length, progress } = props;
  const renderDots = (length: number, progress: number) => {
    const dots = [];
    for (let i = 0; i < length; i++) {
      if (i <= progress) {
        dots.push(1);
      } else {
        dots.push(0);
      }
    }
    return dots.map((dot) => {
      return <StyledDot progress={dot} />;
    });
  };
  return <>{renderDots(length, progress)}</>;
};

export default DotsIndicator;
