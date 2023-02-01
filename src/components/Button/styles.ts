import styled, { css, DefaultTheme } from 'styled-components';

import { fonts } from '../../styles/fonts';

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
        ${fonts.SizeSmall(theme)}
        font-weight: bold;
        ${BacgroundButton[kind](theme)}
        border: none;
        border-radius: .5rem;
        cursor: pointer;
    `}
`;