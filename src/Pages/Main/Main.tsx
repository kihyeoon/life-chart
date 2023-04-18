import { useLocation } from "react-router-dom";

import Chart from "@src/components/Chart/Chart";

import * as Style from "./Main.style";

interface LocationState {
  state: { birthDay: string; lifeExpectancy: string };
}

function Main() {
  const { state } = useLocation() as LocationState;
  const { birthDay, lifeExpectancy } = state;

  return (
    <Style.Container>
      <Chart birthDate={birthDay} years={Number(lifeExpectancy)} />
    </Style.Container>
  );
}

export default Main;
