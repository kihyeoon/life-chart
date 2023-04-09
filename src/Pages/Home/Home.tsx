import { useNavigate } from "react-router-dom";

import AgePicker from "@src/components/@shared/AgePicker/AgePicker";
import Button from "@src/components/@shared/Button/Button";
import DatePicker from "@src/components/@shared/DatePicker/DatePicker";
import { Container } from "@src/components/Chart/Chart.style";
import WeeksContainer from "@src/components/Chart/WeeksContainer/WeeksContainer";

import { Week } from "@src/@utils/createWeeksArray";

import * as Style from "./Home.style";

function Home() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const birthDay = formData.get("birthDay");
    const lifeExpectancy = formData.get("LifeExpectancy");

    navigate("main", { state: { birthDay, lifeExpectancy } });
  };

  // array.from을 사용해서 기본값을 설정
  const defaultArray: Week[] = Array.from({ length: 2600 }, () => ({
    dateRange: "",
    age: 0,
    type: "future",
  }));

  return (
    <Style.FormContainer onSubmit={handleSubmit}>
      <h1>인생표</h1>
      <br />
      <h3>우리는 영원히 살 것처럼 행동하지만 사실 삶은 유한합니다.</h3>
      <h3>100살을 산다고 가정하면 우리에겐 5,218주가 있습니다.</h3>
      <br />
      <Container>
        <WeeksContainer weeksArray={defaultArray} />
      </Container>
      <br />
      <h2>우리에게 남아있는 시간을 알아볼까요?</h2>
      <DatePicker />
      <AgePicker />
      <Button type="submit">보러가기</Button>
    </Style.FormContainer>
  );
}

export default Home;
