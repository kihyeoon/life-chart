import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 8px;
    border: 1px solid ${theme.COLOR.BORDER};
    border-radius: 6px;
    background-color: ${theme.COLOR.CONTAINER.SECONDARY};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
    white-space: nowrap;
    z-index: 1000;
  `}
  ${({ left, top }: { left: string; top: string }) => css`
    left: ${left};
    top: ${top};
  `}
`;

export const P = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
`;
