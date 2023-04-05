import { ButtonHTMLAttributes } from "react";

import { PropsWithChildren } from "@src/@types/utils";

import * as Styled from "./Button.style";

export type StyleType = "primary" | "secondary" | "tertiary";
export type Size = "small" | "medium" | "large";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  styleType: StyleType;
}

function Button({ children, ...props }: PropsWithChildren<Props>) {
  return <Styled.Container {...props}>{children}</Styled.Container>;
}

Button.defaultProps = {
  size: "medium",
  styleType: "primary",
};

export default Button;
