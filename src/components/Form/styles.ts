import styled, { css } from 'styled-components';

import { Conteiner as Button } from '../Button/styles';

export const Conteiner = styled.form`
    ${({ theme }) => css`
        padding: 3.8rem 3.1rem;
        background-color: ${theme.colors.white};
        width: 58.6rem;
        height: 65.7rem;
        border: 0.5px solid #C9C9C9;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            color: ${theme.colors.primaryColor};
            font-size: 3.5rem;
            font-weight: bold;
            padding-bottom: 1.6rem;
        }

        & ${ Button } {
            padding: 2.1rem;
            width: 100%;
            font-size: 2.1rem;
            font-weight: 600;
        }
    `}
`;