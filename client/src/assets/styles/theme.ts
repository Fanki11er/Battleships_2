export const theme: Theme = {
  colors: {
    yellow: '#FFD21E',
  },
  fontSizes: {
    M: '20px',
  },
};

export type Theme = {
  colors: {
    yellow: string;
  };
  fontSizes: {
    M: string;
  };
};

export type StyledProps = {
  theme: Theme;
};
