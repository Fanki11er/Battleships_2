export const theme: Theme = {
  colors: {
    yellow: '#FFD21E',
    inactiveGrey: '#4B4B48',
    myBlue: '#13B3F2',
    orange: '#FF8C00',
    green: '#83B33B',
    okGreen: '#00B45C',
    darkBlue: '#010D26',
    transparentDarkBlue: 'rgba(1, 13, 38, 0.3)',
    red: '#D91424',
    shipRectangle: '#84A7E8',
    water: '#126A75',
    darkGray: '#65617D',
    transparentRed: 'rgba(217, 20, 36, 0.3)',
    transparentMyBlue: 'rgba(19, 179, 242, 0.8)',
    transparentGreen: 'rgba(131,179,59, 0.6)',
    transparentOrange: 'rgba(255, 140, 0, 0.3)',
  },
  fontSizes: {
    XS: '12px',
    S: '16px',
    M: '20px',
    L: '25px',
    XL: '30px',
    XXL: '40px',
    XXXL: '50px',
  },
  otherDimensions: {
    cellSizeNumber: 50,
    cellSize: '50px',
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
    transparentDarkBlue: string;
    red: string;
    okGreen: string;
    shipRectangle: string;
    water: string;
    darkGray: string;
    transparentRed: string;
    transparentMyBlue: string;
    transparentGreen: string;
    transparentOrange: string;
  };
  fontSizes: {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
    XXL: string;
    XXXL: string;
  };

  otherDimensions: {
    cellSize: string;
    cellSizeNumber: number;
  };
};

export type StyledProps = {
  theme: Theme;
};
