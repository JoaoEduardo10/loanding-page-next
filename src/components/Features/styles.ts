import styled, { css } from 'styled-components';

export const Conteiner = styled.section`
    ${() => css`
        padding: 0 11.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;

        & > h1 {
            width: 90rem;
            font-size: 6.2rem;
            font-weight: bold;
            text-align: center;
        }

        & > p {
            width: 90rem;
            font-size: 3rem;
            opacity: 0.7;
            text-align: center;
        }
    `}
`;

export const ConteinerFatures = styled.ul`
    ${() => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 6.8rem;
    `}
`;