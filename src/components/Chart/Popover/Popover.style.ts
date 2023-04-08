import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  padding: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 1000;
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
