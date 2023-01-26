import styled, { css } from 'styled-components';

export const Conteiner = styled.header`
    ${({ theme }) => css`
        padding: 3.4rem 18rem;
        width: 100%;
        background-color: ${theme.colors.primaryColor};
        border-bottom: 0.5px solid ${theme.colors.mediumGray};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-content: space-between;
    `}
`;

export const LogoTipo = styled.div`
    ${() => css`
        max-width: 17.4rem;
        height: 6rem;
    
        img {
            width: 100%;
            height: 100%;
        }    
    `}
`;

export const Menu = styled.nav`
    ${() => css`
        font-size: 2.2rem;

        ul {
            display: flex;
            align-items: center;

            li {
                margin-left: 3.8rem;
            }
        }
    `}
`;

export const Action = styled.div`
    ${({ theme }) => css`
    
        button {
            padding: 1.5rem 5rem;
            font-size: 1.6rem;
            font-weight: bold;
            background-color: ${theme.colors.secondaryColor};
            color: ${theme.colors.white};
            border: none;
            border-radius: .5rem;
        }
    `}
`;