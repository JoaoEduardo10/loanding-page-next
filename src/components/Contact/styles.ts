import styled, { css } from 'styled-components';

import { fonts } from '../../styles/fonts';

export const Conteiner = styled.section`
    ${({ theme }) => css`
        padding: 0 11.25rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem 3rem;
        background-image: url('/images/fundo.svg');
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 10rem;

        @media ${theme.media.phone} {
            padding: 1.6rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            min-width: 100%;
        }

        @media ${theme.media.tablet} {
            display: flex;
            flex-direction: column;
            margin-top: 9rem;
        }

        @media ${theme.media.lapTop} {
            margin-top: 9rem;
        }
    `}
`;

export const DivConteiner = styled.div`
    ${() => css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const Info = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 3.4rem;
    
        span {
            ${fonts.SizeNormal(theme)}
            font-weight: 600;
            color: #0FCE33;
        }

        h2 {
            ${fonts.SizeLarge(theme)}
            font-weight: bold;
        }

        p {
            ${fonts.SizeNormal(theme)}
            font-weight: 300;
            opacity: 0.7;
        }
    `}
`;

export const Pragrafo = styled.p`
    ${({ theme }) => css`
        text-align: center;
        font-size: 1.6rem;
        padding: 3.5rem;
        width: 42.2rem;
        color: ${theme.colors.mediumGray};

        span {
           
            color: ${theme.colors.white};
        }


        @media ${theme.media.phone} {
            width: 100%;

            padding: 1.6rem;
        }

        @media ${theme.media.tablet} {
            width: 100%;
        }

        @media ${theme.media.lapTop} {
            width: 100%;
        }
    `}
`;

