import { createContext, useState } from "react";
import React from "react";
export const PayRoleContext = createContext();

class UserContext extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      payRoleEitData: null,
    };
  }

  setUser = (newValue) => {
    this.setState({ user: newValue });
  };

  render() {
    const { user, payRoleEitData } = this.state;
    return (
      <PayRoleContext.Provider
        value={{ user, payRoleEitData, setUser: this.setUser }}
      >
        {this.props.children}
      </PayRoleContext.Provider>
    );
  }
}

export default UserContext;
