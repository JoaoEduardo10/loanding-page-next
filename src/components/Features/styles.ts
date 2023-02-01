import styled, { css } from 'styled-components';

import { fonts } from '../../styles/fonts';

export const Conteiner = styled.section`
    ${({ theme }) => css`
        padding: 0 11.25rem;
        padding-bottom: 25.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;

        @media ${theme.media.phone} {
            padding: 1.6rem;
            margin-top: 10rem;
            padding-bottom: 9.4rem;
        }

        @media ${theme.media.tablet} {
            padding: 2rem;
            margin-top: 9rem;
        }

        @media ${theme.media.lapTop} {
            padding: 3rem;
            
        }

        & > h1 {
            width: 90rem;
            ${fonts.SizeLarge(theme)}
            font-weight: bold;
            text-align: center;
        }

        & > p {
            width: 90rem;
            ${fonts.SizeMedium(theme)}
            opacity: 0.7;
            text-align: center;
        }

        & > h1, p {


            @media ${theme.media.phone} {
                width: 100%;
            }

            @media ${theme.media.tablet} {
                width: 100%;
            }
        }
    `}
`;

export const ConteinerFatures = styled.ul`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 6.8rem;

        @media ${theme.media.phone} {
            grid-template-columns: 1fr;
            gap: 3.4rem;
        }
    `}
`;