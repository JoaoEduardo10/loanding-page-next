import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.6rem;
        scroll-behavior: smooth;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.white};
        transition: all 300ms ease-in-out;
    }

    a:hover {
        color: ${({ theme }) => theme.colors.secondaryColor};
    }

`;