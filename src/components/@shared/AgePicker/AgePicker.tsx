/* eslint-disable jsx-a11y/label-has-associated-control */
import * as Style from "./AgePicker.style";

function AgePicker() {
  return (
    <label htmlFor="LifeExpectancy">
      몇 살까지 살고 싶으신가요?
      <Style.AgeInput
        type="number"
        id="LifeExpectancy"
        name="LifeExpectancy"
        defaultValue={100}
        min={1}
        max={200}
      />
    </label>
  );
}

export default AgePicker;
