import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5%;
}
body {
    background-color: ${({ theme }) => theme.white};
    font-family: ${({ theme }) => theme.fonts.family.main};
    letter-spacing: 0.1rem;
}
button, li {
    font-family: ${({ theme }) => theme.fonts.family.main};
}

`;

export default GlobalStyle;
