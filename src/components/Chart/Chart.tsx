import * as Style from "@src/components/Chart/Chart.style";
import WeeksContainer from "@src/components/Chart/WeeksContainer/WeeksContainer";

import { createWeeksArray } from "@src/@utils/createWeeksArray";
import { formatNumber } from "@src/@utils/formatNumber";

interface Props {
  birthDate: string;
  years: number;
}

function Chart({ birthDate, years }: Props) {
  const { weeksArray, typeCount } = createWeeksArray(birthDate, years);
  const { past, current, future } = typeCount;
  const totalWeeks = formatNumber(past + current + future);
  const pastWeeks = formatNumber(past);
  const futureWeeks = formatNumber(future);
  const currentWeek = formatNumber(past + 1);

  return (
    <Style.Container>
      <WeeksContainer weeksArray={weeksArray} />
      <Style.ChartInfo>
        <p>
          {`총 `}
          <Style.HighlightedText>{totalWeeks}</Style.HighlightedText>
          {`주 중 `}
          <Style.HighlightedText>{pastWeeks}</Style.HighlightedText>
          {`주 지났고, `}
          <Style.HighlightedText>{futureWeeks}</Style.HighlightedText>주
          남았어요.
        </p>
        <p>
          {`현재 `}
          <Style.HighlightedText>{currentWeek}</Style.HighlightedText>
          번째 주를 살고 있어요.
        </p>
      </Style.ChartInfo>
    </Style.Container>
  );
}

export default Chart;
