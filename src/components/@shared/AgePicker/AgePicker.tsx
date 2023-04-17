/* eslint-disable jsx-a11y/label-has-associated-control */
import * as Style from "./AgePicker.style";

function AgePicker() {
  return (
    <label htmlFor="LifeExpectancy">
      목표로 하는 수명은 어느 정도인가요?
      <Style.AgeInput
        type="number"
        id="LifeExpectancy"
        name="LifeExpectancy"
        defaultValue={100}
        min={1}
        max={200}
        required
      />
    </label>
  );
}

export default AgePicker;
