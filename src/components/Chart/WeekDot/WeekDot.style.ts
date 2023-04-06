import styled, { CSSProp, DefaultTheme, css } from "styled-components";

import { StyleType, WeekDotProps } from "./WeekDot";

const styleTable: Record<StyleType, CSSProp<DefaultTheme>> = {
  past: css`
    background-color: ${({ theme }) => theme.COLOR.PRIMARY.DEFAULT};
  `,

  current: css`
    background-color: ${({ theme }) => theme.COLOR.PRIMARY.ACTIVE};
    animation: shine 1.5s infinite;
    @keyframes shine {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
        transform: scale(1.2);
      }
      100% {
        opacity: 1;
      }
    }
  `,

  future: css`
    background-color: ${({ theme }) => theme.COLOR.TEXT.DISABLED};
  `,
};

export const Container = styled.li`
  width: 4px;
  height: 4px;
  list-style: none;
  border-radius: 100px;

  ${({ styleType }: WeekDotProps) => css`
    ${styleTable[styleType]}
  `}
`;
