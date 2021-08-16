import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

html{
    box-sizing: border-box;
}

*,*::after, *::before{
    box-sizing: inherit;
}

body {
    font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    display: none;
}
}

a, button{
    font-family: Montserrat, sans-serif;
}
`;
