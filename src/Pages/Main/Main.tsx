import { useLocation } from "react-router-dom";

import Chart from "@src/components/Chart/Chart";

interface LocationState {
  state: { birthDay: string; lifeExpectancy: string };
}

function Main() {
  const { state } = useLocation() as LocationState;
  const { birthDay, lifeExpectancy } = state;

  return <Chart birthDate={birthDay} years={Number(lifeExpectancy)} />;
}

export default Main;
