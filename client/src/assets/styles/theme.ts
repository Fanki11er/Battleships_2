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
    salmon: 'rgba(255, 119, 61)',
    transparentSalmon: 'rgba(255, 119, 61, 0.3)',
    lighterBlue: 'rgba(72, 119, 221)',
    transparentLighterBlue: 'rgba(72, 119, 221, 0.3)',
  },
  fontSizes: {
    XS: '12px',
    S: '16px',
    M: '20px',
    L: '25px',
    XL: '30px',
    XXL: '40px',
    XXXL: '50px',
    XXXXL: '65px',
  },
  otherDimensions: {
    cellSizeNumber: 50,
    cellSize: '50px',
    smallCellSize: 30,
    largeCellSize: 60,
  },
  devices: {
    small: `max-width: 720px`,
    medium: `max-width: 1200px`,
    large: 'max-width: 2500px',
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
    salmon: string;
    transparentSalmon: string;
    lighterBlue: string;
    transparentLighterBlue: string;
  };
  fontSizes: {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
    XXL: string;
    XXXL: string;
    XXXXL: string;
  };

  otherDimensions: {
    cellSize: string;
    cellSizeNumber: number;
    smallCellSize: number;
    largeCellSize: number;
  };

  devices: {
    small: string;
    medium: string;
    large: string;
  };
};

export type StyledProps = {
  theme: Theme;
};
