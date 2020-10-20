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
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.primary} ${({ theme }) =>
    theme.fourth};
}
body {
    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.fonts.family.main};
    padding-top: 2rem;

    ${({ theme }) => theme.mq.lg} {
    padding-top: 5rem;
    }

    ::-webkit-scrollbar {
    width: 16px;
    }

    ::-webkit-scrollbar-track {
    background:  ${({ theme }) => theme.primary};
    }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.fourth};
    border: 1px solid ${({ theme }) => theme.primary};
    }
}
button, li {
    font-family: ${({ theme }) => theme.fonts.family.main};
    color: ${({ theme }) => theme.fonts.color.secondary};
}
p {
    color: ${({ theme }) => theme.fonts.color.primary};
}

`;

export default GlobalStyle;
