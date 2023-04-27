import * as Style from "@src/pages/Main/Main.style";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Chart from "@src/components/Chart/Chart";

interface LocationState {
  state: { birthDay: string; lifeExpectancy: string };
}

function Main() {
  const { state } = useLocation() as LocationState;
  const navigate = useNavigate();

  // state가 없으면 홈으로 이동
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) {
    return null;
  }

  const { birthDay, lifeExpectancy } = state;

  return (
    <Style.Container>
      <Chart birthDate={birthDay} years={Number(lifeExpectancy)} />
    </Style.Container>
  );
}

export default Main;
