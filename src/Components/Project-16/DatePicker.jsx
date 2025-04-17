import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Form } from "react-router-dom";
import { FormGroup, FormText, Input, Label } from "reactstrap";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  return (
    <d>
      <form>
        <Flatpickr
          style={{ border: "1px solid black" }}
          value={date}
          onChange={(selectedDates) => setDate(selectedDates[0])}
          options={{
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            defaultDate: new Date(),
          }}
        />
      </form>
    </d>
  );
};

export default DatePicker;
