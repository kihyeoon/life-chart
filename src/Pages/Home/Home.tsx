import { useNavigate } from "react-router-dom";

import AgePicker from "@src/components/@shared/AgePicker/AgePicker";
import Button from "@src/components/@shared/Button/Button";
import DatePicker from "@src/components/@shared/DatePicker/DatePicker";

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

  return (
    <Style.FormContainer onSubmit={handleSubmit}>
      <DatePicker />
      <AgePicker />
      <Button type="submit">보러가기</Button>
    </Style.FormContainer>
  );
}

export default Home;
