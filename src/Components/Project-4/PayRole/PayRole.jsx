import React from "react";
import { Link } from "react-router-dom";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { FormContext } from "../Context/Context";
import { PayRoleContext } from "./PayroleContext/PayRoleContext";

class PayRole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const selectedUser = JSON.parse(localStorage.getItem("user"));
    const { setUser } = this.context;
    console.log(setUser);
    const { userName } = this.state;
    let userData;
    if (prevState.userName !== userName) {
      selectedUser
        ? (userData = selectedUser.filter((val) => val.name === userName))
        : (userData = data.filter((val) => val.name === userName));
      setUser(userData);
    }
  }
  render() {
    const { userName } = this.state;
    console.log(userName);
    const selectUser = (e) => {
      this.setState({ userName: e.target.value });
    };

    return (
      <FormContext.Consumer>
        {({ data }) => (
          <PayRoleContext.Consumer>
            {({ user, setUser }) => (
              <div>
                <h1 className=" text-center py-4 text-2xl font-serif">
                  PayRole
                </h1>
                <form>
                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Select a user:
                    </Label>
                    <Col sm={5}>
                      <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        onChange={selectUser}
                        value={userName}
                      >
                        <option value="">Select user</option>
                        {data.map((val, index) => {
                          return (
                            <option key={val.id} value={val.name}>
                              {val.name}
                            </option>
                          );
                        })}
                      </Input>
                    </Col>
                  </FormGroup>
                </form>
                {user.length !== 0 && (
                  <div className="flex justify-center ">
                    <div className="w-fit h-fit border border-black p-3  rounded-md shadow-lg ">
                      {user.map((val) => {
                        return (
                          <div key={val.id}>
                            <div className="flex flex-col gap-2">
                              <h1 className="text-center font-medium">
                                {val.name}
                              </h1>
                              <p>Email: {val.email}</p>
                              <p>Employee role: {val.employeeRole}</p>
                              <p>Gender: {val.gender}</p>
                              <p>Address: {val.address}</p>
                              <p>Date of Birth: {val.dateOfBirth}</p>
                            </div>
                            <div className="flex justify-between pt-4">
                              {/* <Link to={`/payroleEdit/${val.id}`}>
                                              <button
                                                className="bg-orange-500 px-2 py-1 rounded-sm"
                                                onClick={() => handlePayRoleEdit(val.id)}
                                              >
                                                Edit
                                              </button>
                                            </Link> */}

                              <button className="bg-red-500 px-2 py-1 rounded-sm">
                                Delete
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </PayRoleContext.Consumer>
        )}
      </FormContext.Consumer>
    );
  }
}

export default PayRole;
