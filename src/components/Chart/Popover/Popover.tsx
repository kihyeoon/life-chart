import { AllHTMLAttributes } from "react";

import * as Style from "./Popover.style";

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  showPopover: boolean;
  age: number;
  dateRange: string;
  top: string;
  left: string;
}

function Popover({ showPopover, age, dateRange, top, left }: Props) {
  return showPopover ? (
    <Style.Container top={top} left={left}>
      <Style.P>{`나이: ${age}`}</Style.P>
      <Style.P>{`기간: ${dateRange}`}</Style.P>
    </Style.Container>
  ) : null;
}

export default Popover;
