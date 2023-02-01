import styled, { css } from 'styled-components';

import { fonts } from '../../styles/fonts';

export const Conteiner = styled.input`
    ${({ theme }) => css`
        padding: 2.2rem 1.7rem;
        background-color: #F7F7F7;
        border: none;
        outline: none;
        font-size: 1.9rem;
        font-weight: 300;
        color: #606060;

        &:focus {
            border: 1px solid ${theme.colors.secondaryColor};
        }

        @media ${theme.media.phone} {
            ${fonts.SizeNormal(theme)}
        }
    `}
`;