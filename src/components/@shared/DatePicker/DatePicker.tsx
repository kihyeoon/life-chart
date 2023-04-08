/* eslint-disable jsx-a11y/label-has-associated-control */
import * as Style from "./DatePicker.style";

function DatePicker() {
  return (
    <label htmlFor="birthDay">
      생일을 알려주세요
      <Style.DateInput type="date" id="birthDay" name="birthDay" />
    </label>
  );
}

export default DatePicker;
