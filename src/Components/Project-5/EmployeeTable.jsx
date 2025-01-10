import { Table } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import {
  clearForm,
  setData,
  setEditData,
  setFormDetails,
} from "./Action/Action";

const mapStateToProps = (props) => {
  return {
    data: props.dataReducer.data,
    editData: props.editDataReducer.editData,
  };
};

const mapDispatchToProps = {
  setFormDetails,
  setData,
  setEditData,
};

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { editData } = this.props;
    console.log(editData);
    const { setFormDetails } = this.props;
    const { setEditData } = this.props;
    const handleEdit = (id) => {
      data.filter((val) => {
        val.id === id && (setFormDetails(val), setEditData(val));
      });
    };

    return (
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
                        onClick={() => handleEdit()}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 px-2 py-1 rounded-sm"
                        onClick={() => handleDelete()}
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);
