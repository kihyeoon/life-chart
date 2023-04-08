import styled, { css } from "styled-components";

export const AgeInput = styled.input`
  ${({ theme }) => css`
    padding: 8px;
    border: 1px solid ${theme.COLOR.BORDER};
    border-radius: 6px;
    background-color: ${theme.COLOR.CONTAINER.SECONDARY};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
    margin-left: 10px;
  `}
`;
