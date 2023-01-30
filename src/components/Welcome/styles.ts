import styled, { css } from 'styled-components';

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
            font-size: 7.1rem;
        }

        p {
            font-size: 3rem;
            opacity: 0.8;
        }
    `}
`;

export const Image = styled.div`
    ${() => css`
        text-align: center;
    `}
`;