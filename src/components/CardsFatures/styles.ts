import styled, { css } from 'styled-components';

import { fonts } from '../../styles/fonts';

export const Features = styled.li`
    ${({ theme }) => css`
        padding: 3.2rem;
        background-color: ${theme.colors.white};
        border-radius: .5rem;
        max-width: 50.9rem;
        max-height: 34.7rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings.small};
        
        
        h1 {
            ${fonts.SizeMedium(theme)}
            font-weight: bold;
            color: ${theme.colors.primaryColor};
        }

        p {
            ${fonts.SizeSmall(theme)}
            opacity: 0.7;
            color: #4A4A4A;
        }

        @media ${theme.media.phone} {
            padding: 2rem;
        }
    `}
`;