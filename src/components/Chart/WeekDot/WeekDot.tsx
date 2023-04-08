import { LiHTMLAttributes } from "react";

import * as Style from "./WeekDot.style";

export type StyleType = "past" | "current" | "future";

export interface WeekDotProps extends LiHTMLAttributes<HTMLLIElement> {
  styleType: StyleType;
}

function WeekDot({ ...props }: WeekDotProps) {
  return <Style.Container {...props} />;
}

export default WeekDot;

// {
//   age: 0,
//   dateRange: '2023.3.23 ~ 2023.3.29',
//   type: 'past'
// },
