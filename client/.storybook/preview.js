import { ThemeProvider } from 'styled-components';
import { theme } from '../src/assets/styles/theme';
import { GlobalStyles } from '../src/assets/styles/GlobalStyle';

export const parameters = {
  backgrounds: {
    default: 'darkBlue',
    values: [
      {
        name: 'darkBlue',
        value: '#010D26',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
