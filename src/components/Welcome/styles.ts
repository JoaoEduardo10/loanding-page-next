import styled, { css } from 'styled-components';

export const Conteiner = styled.section`
    ${({ theme }) => css``}
`;

export const Title = styled.div`
    ${({ theme }) => css`

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
    ${({ theme }) => css``}
`;