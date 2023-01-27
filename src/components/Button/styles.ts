import styled, { css, DefaultTheme } from 'styled-components';


const BacgroundButton = {
	premary: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.secondaryColor};
        color: ${theme.colors.white};
    `,
	secondary: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.primaryColor};
    `
};

export const Conteiner = styled.button<{ kind: 'premary' | 'secondary' }>`
    ${({ theme, kind }) => css`
        padding: 1.5rem 5rem;
        font-size: 1.6rem;
        font-weight: bold;
        ${BacgroundButton[kind](theme)}
        border: none;
        border-radius: .5rem;
        cursor: pointer;
    `}
`;