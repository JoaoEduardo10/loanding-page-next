import styled, { css } from 'styled-components';

export const Features = styled.li`
    ${({ theme }) => css`
        padding: 3.2rem;
        background-color: ${theme.colors.white};
        border-radius: .5rem;
        width: 50.9rem;
        height: 34.7rem;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings.small};
        
        
        h1 {
            font-size: 4.1rem;
            font-weight: bold;
            color: ${theme.colors.primaryColor};
        }

        p {
            font-size: 2.2rem;
            opacity: 0.7;
            color: #4A4A4A;
        }
    `}
`;