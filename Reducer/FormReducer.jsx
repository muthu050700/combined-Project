const formDetails = {
  name: "",
  email: "",
  password: "",
  gender: "",
  address: "",
  employeeRole: "",
  dateOfBirth: "",
};

export const FormReducer = (state = formDetails, action) => {
  switch (action.type) {
    case "setFormDetails":
      return { ...state, [action.payload.field]: action.payload.value };

    case "clearForm":
      const payload = action.payload;
      return { ...state, ...payload };
    default:
      return state;
  }
};
