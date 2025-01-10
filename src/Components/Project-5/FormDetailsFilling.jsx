import React from "react";
import {
  clearForm,
  setData,
  setEditData,
  setFormDetails,
} from "./Action/Action";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { checkValidate } from "./utils/validate";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const mapStateToPropss = (props) => {
  return {
    formDetails: props.formReducer,
    data: props.dataReducer.data,
    editData: props.editDataReducer.editData,
  };
};

class FormDetailsFilling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: [],
    };
  }

  render() {
    const { formDetails } = this.props;
    const { data } = this.props;
    const { editData } = this.props;
    const { error } = this.state;
    // const { setEditData } = this.props;
    // const { clearForm } = this.props;
    // const { setData } = this.props;

    const handleChange = (e) => {
      const { name, value } = e.target;
      this.props.dispatch(setFormDetails(name, value));
    };

    const initialFormDetails = {
      name: "",
      email: "",
      password: "",
      gender: "",
      address: "",
      employeeRole: "",
      dateOfBirth: "",
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      const message = checkValidate(
        formDetails.name,
        formDetails.email,
        formDetails.password,
        formDetails.address
      );
      console.log(message);
      this.setState({
        error: {
          ...initialFormDetails,
          ...message,
        },
      });

      if (message !== null) return;

      if (editData !== null) {
        const index = data.findIndex((val) => val.id === editData.id);
        const tempData = [...data];
        tempData[index] = formDetails;
        this.props.dispatch(setData(tempData));
        this.props.dispatch(setEditData(null));
      } else {
        this.props.dispatch(setData([...data, { id: v4(), ...formDetails }]));
      }
      // setData([...data, { id: v4(), ...formDetails }]);
      console.log(formDetails);

      this.props.dispatch(clearForm(initialFormDetails));
    };
    return (
      <>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your Name"
              type="text"
              value={formDetails.name}
              onChange={handleChange}
            />
            {error && (
              <span className=" text-red-600 text-sm mb-3">
                {error.name || error.isNameValid}
              </span>
            )}
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your Email"
              type="email"
              value={formDetails.email}
              onChange={handleChange}
            />
            {error && (
              <span className=" text-red-600 text-sm mb-3">
                {error.email || error.isEmailValid}
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter Password"
              type="password"
              value={formDetails.password}
              onChange={handleChange}
            />
            {error && (
              <span className=" text-red-600 text-sm mb-3">
                {error.password || error.isPasswordValid}
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Date Of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Enter your Date Of Birth"
              type="date"
              value={formDetails.dateOfBirth}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
            <Input
              id="exampleSelect"
              name="gender"
              type="select"
              value={formDetails.gender}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Address</Label>
            <Input
              id="exampleText"
              name="address"
              type="textarea"
              value={formDetails.address}
              onChange={handleChange}
            />
            {error && (
              <span className=" text-red-600 text-sm mb-3">
                {error.address}
              </span>
            )}
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Employee Role</legend>
            <FormGroup check>
              <Input
                name="employeeRole"
                type="radio"
                value={formDetails.employeeRole || "Manager"}
                onChange={handleChange}
              />{" "}
              <Label check>Manager</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="employeeRole"
                type="radio"
                value={formDetails.employeeRole || "Employee"}
                onChange={handleChange}
              />{" "}
              <Label check>Employee</Label>
            </FormGroup>
          </FormGroup>
          <div className="flex justify-between">
            {/* <Button>{editData !== null ? "Update" : "Submit"}</Button> */}
            <Button>Submit</Button>

            <Link to="/view_employee">
              <p className=" bg-slate-600 px-2 text-center py-1 font-medium text-white rounded-md">
                View Employee
              </p>
            </Link>
          </div>
        </Form>
      </>
    );
  }
}

export default connect(mapStateToPropss, null)(FormDetailsFilling);
