export const theme: Theme = {
  colors: {
    yellow: '#FFD21E',
    inactiveGrey: '#4B4B48',
    myBlue: '#13B3F2',
    orange: '#FF8C00',
    green: '#83B33B',
    darkBlue: '#010D26',
  },
  fontSizes: {
    S: '16px',
    M: '20px',
    L: '25px',
  },
};

export type Theme = {
  colors: {
    yellow: string;
    inactiveGrey: string;
    myBlue: string;
    orange: string;
    green: string;
    darkBlue: string;
  };
  fontSizes: {
    S: string;
    M: string;
    L: string;
  };
};

export type StyledProps = {
  theme: Theme;
};
