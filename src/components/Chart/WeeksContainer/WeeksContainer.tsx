/* eslint-disable react/no-array-index-key */
import { MouseEvent, useState } from "react";

import Popover from "@src/components/Chart/Popover/Popover";
import WeekDot from "@src/components/Chart/WeekDot/WeekDot";

import { Week } from "@src/@utils/createWeeksArray";

import * as Style from "./WeeksContainer.style";

interface Position {
  top: string;
  left: string;
}

function WeeksContainer({ weeksArray }: { weeksArray: Week[] }) {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [popoverPosition, setPopoverPosition] = useState<Position>({
    top: "",
    left: "",
  });
  const [dataIndex, setDataIndex] = useState<number>(0);

  const handleMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    setDataIndex(Number(event.currentTarget.getAttribute("data-index")));
    const rect = event.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      top: `${rect.top + window.scrollY + rect.height}px`,
      left: `${rect.left + window.scrollX}px`,
    });
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  return (
    <Style.GridContainer>
      {weeksArray.map((week, index) => (
        <WeekDot
          key={`${index}-${week.dateRange}`}
          styleType={week.type}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-index={index}
        />
      ))}
      <Popover
        showPopover={showPopover}
        age={weeksArray[dataIndex].age}
        dateRange={weeksArray[dataIndex].dateRange}
        top={popoverPosition.top}
        left={popoverPosition.left}
      />
    </Style.GridContainer>
  );
}

export default WeeksContainer;
