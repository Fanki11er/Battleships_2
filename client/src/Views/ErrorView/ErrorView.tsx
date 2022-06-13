import Footer from '../../components/Molecules/Footer/Footer';
import TopWrapper from '../../components/Molecules/TopWrapper/TopWrapper';
import { ErrorInfo, Wrapper } from './ErrorView.styles';

const ErrorView = () => {
  return (
    <Wrapper>
      <TopWrapper />
      <ErrorInfo>Sorry Captain... something went terribly wrong</ErrorInfo>
      <Footer />
    </Wrapper>
  );
};

export default ErrorView;
