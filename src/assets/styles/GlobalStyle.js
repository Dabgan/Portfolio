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
body {
    background-color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.fonts.main};
}
`;

export default GlobalStyle;
