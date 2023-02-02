import styled, { css } from 'styled-components';

const handleOpenAndClose = {
	open: () => css`
        animation: openin 300ms ease-in-out ;

        @keyframes openin {
            0% {
                transform: translateX(-100%);
            }

            100% {
                transform: translateX(0);
            }
        }
    `,
	close: () => css`
        animation: close 300ms ease-in-out ;
        transform: translateX(-100%);

        @keyframes close {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }
    `
};

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

export const MenuMobile = styled.nav<{ open: boolean }>`
    ${({ theme, open }) => css`
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0%;
        left: 0%;
        z-index: 2;
        background-color: ${theme.colors.white};
        display: none;


        @media ${theme.media.phone} {
            display: block;
            ${ open ? handleOpenAndClose.open() : handleOpenAndClose.close() }

            ul {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1.6rem;
                
                li a {
                    color: ${theme.colors.secondaryColor};
                }
            }
        }
    `}
`;

export const Icon = styled.div`
    ${({ theme }) => css`
        position: fixed;
        z-index: 3;
        right: 15%;
        top: 15%;
        display: none;

        @media ${theme.media.phone} {
            display: block;
        }

        svg {
            color: ${theme.colors.primaryColor};
            font-size: 4rem;
        }

        svg.icon2 {
                position: fixed;
                color: ${theme.colors.secondaryColor};
                top: 5%;
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