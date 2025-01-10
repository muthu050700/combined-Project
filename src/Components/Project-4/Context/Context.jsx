import { data } from "autoprefixer";
import React from "react";

export const FormContext = React.createContext();

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
class Context extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formDetails: initialFormDetails,
      editData: null,
      data: [],
    };
  }

  setFormDetails = (newValue) => {
    this.setState({ formDetails: newValue });
  };

  setEditData = (newValue) => {
    this.setState({ editData: newValue });
  };

  setData = (newValue) => {
    this.setState({ data: newValue });
  };

  render() {
    const { formDetails, editData, data } = this.state;
    return (
      <FormContext.Provider
        value={{
          formDetails,
          setFormDetails: this.setFormDetails,
          editData,
          setEditData: this.setEditData,
          data,
          setData: this.setData,
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default Context;
