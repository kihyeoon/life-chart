type Week = {
  age: number;
  dateRange: string;
  type: "past" | "current" | "future";
};

export function createWeeksArray(
  birthday: string,
  expectedAge: number,
): Week[] {
  const startDate = new Date(birthday);
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + expectedAge);

  const weeksArray = [];
  const today = new Date();
  const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
  const oneYearInMillis = 365.25 * 24 * 60 * 60 * 1000;
  const startDateInMillis = startDate.getTime();
  const endDateInMillis = endDate.getTime();
  const todayInMillis = today.getTime();
  let currentWeekInMillis = startDateInMillis;

  while (currentWeekInMillis < endDateInMillis) {
    const startOfWeek = new Date(currentWeekInMillis);
    const endOfWeek = new Date(currentWeekInMillis + oneWeekInMillis - 1);
    const dateRange = `${startOfWeek.getFullYear()}.${
      startOfWeek.getUTCMonth() + 1
    }.${startOfWeek.getUTCDate()} ~ ${endOfWeek.getFullYear()}.${
      endOfWeek.getUTCMonth() + 1
    }.${endOfWeek.getUTCDate()}`;

    const currentAge = Math.floor(
      (currentWeekInMillis - startDateInMillis) / oneYearInMillis,
    );
    const currentPassed = currentWeekInMillis < todayInMillis;

    let type = "";
    if (currentPassed && todayInMillis < endOfWeek.getTime()) {
      type = "current";
    } else {
      type = currentPassed ? "past" : "future";
    }

    weeksArray.push({
      age: currentAge,
      dateRange,
      type,
    });

    currentWeekInMillis += oneWeekInMillis;
  }

  return weeksArray;
}
