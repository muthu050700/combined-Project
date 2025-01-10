import { Table } from "reactstrap";
import { FormContext } from "./Context/Context";
import React from "react";
class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleEdit = (id, setEditData, data, setFormDetails) => {
      data.filter((val) => {
        val.id === id && (setFormDetails(val), setEditData(val));
      });
    };

    const handleDelete = (id, data, setData) => {
      setData(data.filter((val) => val.id !== id));
    };
    return (
      <FormContext.Consumer>
        {({ data, setEditData, setFormDetails, setData }) => (
          <div>
            {data.length !== 0 ? (
              <Table striped>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Employee Role</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {data.map((value, index) => {
                  return (
                    <tbody key={value.id}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td>{value.dateOfBirth}</td>
                        <td>{value.gender}</td>
                        <td>{value.address}</td>
                        <td>{value.employeeRole}</td>
                        <td className="flex gap-3">
                          <button
                            className="bg-orange-500 px-2 py-1 rounded-sm"
                            onClick={() =>
                              handleEdit(
                                value.id,
                                setEditData,
                                data,
                                setFormDetails
                              )
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 px-2 py-1 rounded-sm"
                            onClick={() =>
                              handleDelete(value.id, data, setData)
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            ) : (
              <p className=" text-red-600 text-center font-bold my-4">
                No Record found
              </p>
            )}
          </div>
        )}
      </FormContext.Consumer>
    );
  }
}

export default EmployeeTable;
