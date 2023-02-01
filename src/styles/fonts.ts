import { css, DefaultTheme } from 'styled-components';

export const fonts = {
	SizeExtra: (theme: DefaultTheme) => css`
        font-size: 7.1rem;

        @media ${theme.media.phone} {
            font-size: 3.5rem; 
        }

        @media ${theme.media.tablet} and (min-width: 781px) {
            font-size: 5rem; 
        }

        @media ${theme.media.lapTop} and (min-width: 951px) {
            font-size: 5.5rem; 
        }
    `,
	SizeLarge: (theme: DefaultTheme) => css`
        font-size: 6.5rem;

        @media ${theme.media.phone} {
            font-size: 3.2rem; 
        }

        @media ${theme.media.tablet} and (min-width: 781px) {
            font-size: 4.5rem; 
        }

        @media ${theme.media.lapTop} and (min-width: 951px) {
            font-size: 5rem; 
        }
    `,
	SizeMedium: (theme: DefaultTheme) => css`
        font-size: 4.1rem;

        @media ${theme.media.phone} {
            font-size: 2.2rem; 
        }

        @media ${theme.media.tablet} and (min-width: 781px) {
            font-size: 2.8rem; 
        }

        @media ${theme.media.lapTop} and (min-width: 951px) {
            font-size: 3.5rem; 
        }
    `,
	SizeNormal: (theme: DefaultTheme) => css`
        font-size: 3rem;

        @media ${theme.media.phone} {
            font-size: 1.5rem; 
        }

        @media ${theme.media.tablet} and (min-width: 781px) {
            font-size: 2rem; 
        }

        @media ${theme.media.lapTop} and (min-width: 951px) {
            font-size: 2.8rem; 
        }
    `,
	SizeSmall: (theme: DefaultTheme) => css`
        font-size: 2.2rem;

        @media ${theme.media.phone} {
            font-size: 1.1rem; 
        }

        @media ${theme.media.tablet} and (min-width: 781px) {
            font-size: 1.5rem; 
        }

        @media ${theme.media.lapTop} and (min-width: 951px) {
            font-size: 1.8rem; 
        }
    `,
};