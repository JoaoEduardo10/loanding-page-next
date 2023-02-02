import styled, { css } from 'styled-components';

import { fonts } from '../../styles/fonts';

export const Conteiner = styled.section`
    ${({ theme }) => css`
        height: 100vh;
        background-image: url("/images/fundo.svg");
        background-size: cover;
        background-repeat: no-repeat;
        color: ${theme.colors.white};
        padding: 0 11.25rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;

        @media ${theme.media.phone} {
            height: 100%;
            align-items: initial;
            padding: 1.6rem;
            grid-template-columns: 1fr;
            margin-top: 0;
            background-size: cover;
        }

        @media ${theme.media.tablet} {
            padding: 2rem;
            height: 100%;
            align-items: initial;
            margin-top: 5rem;
        }

        @media ${theme.media.lapTop} {
            padding: 3rem;
        }
    `}
`;

export const Title = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: ${theme.spacings.small};

        h1 {
            font-weight: bold;
            ${fonts.SizeExtra(theme)}
        }

        p {
            ${fonts.SizeNormal(theme)}
            opacity: 0.8;
        }
    `}
`;

export const Image = styled.div`
    ${({ theme }) => css`
        text-align: center;

        img {
            width: 100%;
            height: 100%;
        }

        @media ${theme.media.phone} {
            grid-column: 1;
            grid-row: 1;
        }
    `}
`;