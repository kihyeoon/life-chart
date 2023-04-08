import WeekDot from "@src/components/Chart/WeekDot/WeekDot";

import { createWeeksArray } from "@src/@utils/createWeeksArray";

import * as Style from "./WeeksContainer.style";

interface Props {
  birthDate: string;
  years: number;
}

function WeeksContainer({ birthDate, years }: Props) {
  const weeks = createWeeksArray(birthDate, years);
  return (
    <Style.Container>
      {weeks.map((week) => (
        <WeekDot key={week.dateRange} styleType={week.type} />
      ))}
    </Style.Container>
  );
}

export default WeeksContainer;
