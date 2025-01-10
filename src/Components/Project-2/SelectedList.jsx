import React from "react";
import { useLocation } from "react-router-dom";
import { Table } from "reactstrap";
import TableHeader from "./TableHeader";

const SelectedList = () => {
  const location = useLocation();
  const selectedData = location.state.selectedIds;
  const tempData = location.state.tempData;
  console.log(selectedData, tempData);
  return (
    <>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>S In</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Warrenty Information</th>
              <th>Stock</th>
              <th>Return Policy</th>
              <th>Availability Status</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {tempData.map((value, index) => {
              return (
                selectedData.includes(value.id) && (
                  <tr key={value.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.title}</td>
                    <td>{value.category}</td>
                    <td>{value.price}</td>
                    <td>{value.rating}</td>
                    <td>{value.warrantyInformation}</td>
                    <td>{value.stock}</td>
                    <td>{value.returnPolicy}</td>
                    <td>{value.availabilityStatus}</td>
                    <td>{value.reviews[0].comment}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SelectedList;
