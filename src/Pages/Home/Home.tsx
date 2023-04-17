import * as Style from "@src/pages/Home/Home.style";
import { useNavigate } from "react-router-dom";

import AgePicker from "@src/components/@shared/AgePicker/AgePicker";
import Button from "@src/components/@shared/Button/Button";
import DatePicker from "@src/components/@shared/DatePicker/DatePicker";
import { Container } from "@src/components/Chart/Chart.style";
import WeeksContainer from "@src/components/Chart/WeeksContainer/WeeksContainer";

import { Week } from "@src/@utils/createWeeksArray";

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
      <h3>
        인생은 소중하고 가치 있는 선물이지만, 우리는 때로 영원한 것처럼 여기곤
        합니다.
      </h3>
      <h3>
        100세의 생을 누린다고 해도, 우리는 단지 5,218주를 가지고 있습니다.
      </h3>
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
