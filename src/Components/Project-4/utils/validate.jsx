export const checkValidate = (name, email, password, address) => {
  //Name validation
  const isValidName = /^[a-zA-Z0-9]*$/.test(name);
  //email validation
  const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  //password validation
  const isValidPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (name.length === 0) {
    //checking wheather name is empty or not
    return { name: "Name field is required" };
  } else if (!isValidName) {
    //checking name field contails a special characters
    return { isNameValid: "Name should not contain a special character" };
  }

  // Email validation
  if (email.length === 0) {
    //checking wheather email is empty or not
    return { email: "Email field is required" };
  } else if (!isValidEmail) {
    return { isEmailValid: "Email is not valid" };
  }

  //password validation
  if (password.length === 0) {
    //checking wheather password is empty or not
    return { password: "Password field is required" };
  } else if (!isValidPassword) {
    return { isPasswordValid: "Password is not valid" };
  }

  //Adress validation
  if (address.length === 0) {
    return { address: "Address field is required" };
  } else if (address.length > 50) {
    return { address: "Address shouldn't exceed 50 characters" };
  }
  return null;
};
