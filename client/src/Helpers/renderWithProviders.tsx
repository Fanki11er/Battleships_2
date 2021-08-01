import { render } from '@testing-library/react';
import { PropsWithChildren, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

const renderWithProviders = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default renderWithProviders;
