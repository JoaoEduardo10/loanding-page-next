import styled, { css } from 'styled-components';

export const Conteiner = styled.footer`
    ${() => css`
        padding: 0 11.25rem;
        padding-top: 7.2rem;
        padding-bottom: 7.2rem;
        font-size: 1.6rem;
        background-color: #26003B;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5rem;
    `}
`;

export const Colunm = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        font-size: 2.2rem;
        gap: ${theme.spacings.small};
        margin-top: 8.1rem;

        &:nth-child(1) {
            margin-top: 0;
        }

        h2, h3 {
            font-size: 2.9rem;
        }

        h3 {
            color: ${theme.colors.secondaryColor};
        }

        p {
            font-size: 2.2rem;
        }
    
    `}
`;

export const ConteinerIcons = styled.div`
    ${() => css`
        display: flex;
        gap: 1.6rem;

        svg{
            font-size: 2.5rem;
        }
    `}
`;

export const CopyRith = styled.div`
    ${() => css`
        padding: 8rem 0 1rem;
       font-size: 2rem;
       color: #969696;
       grid-column: span 4;
       text-align: center;
    `}
`;