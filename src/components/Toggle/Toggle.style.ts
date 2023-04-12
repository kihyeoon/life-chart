import styled from "styled-components";

export interface HighlightProps {
  left: number;
  width: number;
}

export const TabContainer = styled.div`
  background-color: ${({ theme }) => theme.COLOR.CONTAINER.SECONDARY};
  position: fixed;
  top: 5px;
  right: 5px;
  width: fit-content;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: ${({ theme }) => `0px 1px 8px ${theme.COLOR.SHADOW}`};
  border-radius: 50px;
`;

export const TabMenu = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
  list-style: none;
  position: relative;
  li {
    white-space: nowrap;
    font-size: "16px";
    color: #acaebb;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .focused {
    color: #414141;
  }
`;

export const Highlight = styled.span<HighlightProps>`
  background: ${({ theme }) => theme.COLOR.CONTAINER.SECONDARY};
  position: absolute;
  width: ${({ width }) => `${width}px`};
  top: 6px;
  bottom: 6px;
  transition: left 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  left: ${({ left }) => `${left + 8}px`};
  border-radius: 50px;
  box-shadow: ${({ theme }) => `0px 1px 8px ${theme.COLOR.SHADOW}`};
`;
