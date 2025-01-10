import React from "react";
import EmployeeFormFilling from "./EmployeeFormFilling";
import EmployeeTable from "./EmployeeTable";
import { FormContext } from "./Context/Context";
import { Link } from "react-router-dom";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex">
          <div className="flex items-center">
            <Link to="/">
              <p className="  bg-amber-400 px-3 py-1 rounded-sm ml-2 w-fit text-lg font-medium text-white">
                Home
              </p>
            </Link>
          </div>

          <h1 className="flex  items-center justify-center py-4 text-2xl font-serif w-full">
            Employee Form
          </h1>
        </div>

        <div className=" w-6/12 m-auto border border-black p-4 my-4 shadow-2xl rounded-md">
          <EmployeeFormFilling />
        </div>
        {/* 
        <EmployeeTable /> */}
      </div>
    );
  }
}

export default EmployeeForm;
