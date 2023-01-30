import styled, { css } from 'styled-components';

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
    `}
`;

export const Info = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 3.4rem;
    
        span {
            font-size: 3rem;
            font-weight: 600;
            color: #0FCE33;
        }

        h2 {
            font-size: 6.2rem;
            font-weight: bold;
        }

        p {
            font-size: 3rem;
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
    `}
`;

