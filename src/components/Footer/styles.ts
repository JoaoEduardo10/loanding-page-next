import styled, { css } from 'styled-components';

import { fonts } from '../../styles/fonts';

export const Conteiner = styled.footer`
    ${({ theme }) => css`
        padding: 0 11.25rem;
        padding-top: 7.2rem;
        padding-bottom: 7.2rem;
        font-size: 1.6rem;
        background-color: #26003B;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5rem;


        @media ${theme.media.phone} {
            padding: 1.6rem;
            display: flex;
            flex-direction: column;
            gap: 2.6rem;
        }
    `}
`;

export const Colunm = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        ${fonts.SizeSmall(theme)}
        gap: ${theme.spacings.small};
        margin-top: 8.1rem;

        &:nth-child(1) {
            margin-top: 0;
        }

        h2, h3 {
            ${fonts.SizeNormal(theme)}
        }

        h3 {
            color: ${theme.colors.secondaryColor};
        }

        p {
            ${fonts.SizeSmall(theme)}
        }

        @media ${theme.media.phone} {
            margin-top: 0;
        }
    
    `}
`;

export const ConteinerIcons = styled.div`
    ${({ theme }) => css`
        display: flex;
        gap: 1.6rem;

        @media ${theme.media.phone} {
            text-align: left;
        }

        svg{
            font-size: 2.2rem;
        }
    `}
`;

export const CopyRith = styled.div`
    ${({ theme }) => css`
        padding: 8rem 0 1rem;
        ${fonts.SizeSmall(theme)}
        color: #969696;
        grid-column: span 4;
        text-align: center;


        @media ${theme.media.phone} {
            padding: 1rem 0 1rem;
        }
    `}
`;