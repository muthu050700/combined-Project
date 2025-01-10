import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FormContext } from "./Context/Context";
import { checkValidate } from "./utils/validate";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

//initial error details
const errorDetails = {
  name: "",
  isNameValid: "",
  email: "",
  isEmailValid: "",
  password: "",
  isPasswordValid: "",
  address: "",
};

//Initial form details
const initialFormDetails = {
  name: "",
  email: "",
  password: "",
  gender: "",
  address: "",
  employeeRole: "",
  dateOfBirth: "",
};

class EmployeeFormFilling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: errorDetails,
    };
  }

  render() {
    const { error } = this.state;
    const handleFormDetailsChange = (e, setFormDetails, formDetails) => {
      setFormDetails({
        ...formDetails,
        [e.target.name]: e.target.value,
      });
    };

    const handleFormSubmit = (
      e,
      formDetails,
      editData,
      data,
      setData,
      setEditData,
      setFormDetails
    ) => {
      e.preventDefault();

      const message = checkValidate(
        formDetails.name,
        formDetails.email,
        formDetails.password,
        formDetails.address
      );

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
        setData(tempData);
        setEditData(null);
      } else {
        setData([...data, { id: v4(), ...formDetails }]);
      }

      setFormDetails(initialFormDetails);
    };
    return (
      <FormContext.Consumer>
        {({
          formDetails,
          setFormDetails,
          editData,
          setData,
          data,
          setEditData,
        }) => (
          <>
            <Form
              onSubmit={(e) =>
                handleFormSubmit(
                  e,
                  formDetails,
                  editData,
                  data,
                  setData,
                  setEditData,
                  setFormDetails
                )
              }
            >
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  type="text"
                  value={formDetails.name}
                  onChange={(e) =>
                    handleFormDetailsChange(e, setFormDetails, formDetails)
                  }
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
                  onChange={(e) =>
                    handleFormDetailsChange(e, setFormDetails, formDetails)
                  }
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
                  onChange={(e) =>
                    handleFormDetailsChange(e, setFormDetails, formDetails)
                  }
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
                  onChange={(e) =>
                    handleFormDetailsChange(e, setFormDetails, formDetails)
                  }
                />
              </FormGroup>

              <Label for="exampleSelect">Gender</Label>
              <Input
                id="exampleSelect"
                name="gender"
                type="select"
                value={formDetails.gender}
                onChange={(e) =>
                  handleFormDetailsChange(e, setFormDetails, formDetails)
                }
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </Input>

              <FormGroup>
                <Label for="exampleText">Address</Label>
                <Input
                  id="exampleText"
                  name="address"
                  type="textarea"
                  value={formDetails.address}
                  onChange={(e) =>
                    handleFormDetailsChange(e, setFormDetails, formDetails)
                  }
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
                    onChange={(e) =>
                      handleFormDetailsChange(e, setFormDetails, formDetails)
                    }
                  />{" "}
                  <Label check>Manager</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="employeeRole"
                    type="radio"
                    value={formDetails.employeeRole || "Employee"}
                    onChange={(e) =>
                      handleFormDetailsChange(e, setFormDetails, formDetails)
                    }
                  />{" "}
                  <Label check>Employee</Label>
                </FormGroup>
              </FormGroup>
              <div className="flex justify-between">
                <Button>{editData !== null ? "Update" : "Submit"}</Button>

                <Link to="/payRole">
                  <p className=" bg-slate-600 px-2 text-center py-1 font-medium text-white rounded-md">
                    Pay Role
                  </p>
                </Link>
              </div>
            </Form>
          </>
        )}
      </FormContext.Consumer>
    );
  }
}

export default EmployeeFormFilling;
