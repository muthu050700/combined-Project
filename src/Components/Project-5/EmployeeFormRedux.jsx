import React from "react";
import FormDetailsFilling from "./FormDetailsFilling";
import EmployeeTable from "./EmployeeTable";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className=" text-center py-4 text-2xl font-serif">Employee Form</h1>
        <div className=" w-6/12 m-auto border border-black p-4 my-4 shadow-2xl rounded-md">
          <FormDetailsFilling />
        </div>
      </div>
    );
  }
}

export default EmployeeForm;
