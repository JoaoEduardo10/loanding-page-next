import styled, { css } from 'styled-components';

export const Conteiner = styled.header`
    ${({ theme }) => css`
        padding: 3rem 11.25rem;
        width: 100%;
        background-color: ${theme.colors.primaryColor};
        border-bottom: 0.5px solid ${theme.colors.mediumGray};
        display: flex;
        gap: 1.6rem;
        align-items: center;
        justify-content: space-between;

        @media ${theme.media.phone} {
            padding: 1.6rem;
        }

        @media ${theme.media.tablet} {
            padding: 2rem;
            grid-template-columns: repeat(2, 1fr);
        }

        @media ${theme.media.lapTop} {
            padding: 3rem;
        }
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
    ${({ theme }) => css`
        font-size: 2.2rem;

        ul {
            display: flex;
            align-items: center;

            li {
                margin-left: 3.8rem;
            }
        }

        @media ${theme.media.phone} {
            display: none;
        }
    `}
`;

export const Action = styled.div`
    ${({ theme }) => css`


        @media ${theme.media.phone} {
            display: none;
        }

        @media ${theme.media.tablet} {
            display: none;
        }
    `}
`;