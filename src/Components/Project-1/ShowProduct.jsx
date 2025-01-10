import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

const ShowUser = () => {
  const productDetails = useSelector((store) => store.product.products);
  return productDetails.length === 0 ? (
    <p className="text-center font-bold text-xl py-5">
      There is no product created!!!
    </p>
  ) : (
    <>
      <h1 className="text-center font-bold text-xl py-5">Products</h1>
      <Table>
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
          {productDetails.map((val, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.title}</td>
                  <td>{val.category}</td>
                  <td>{val.price}</td>
                  <td>{val.rating}</td>
                  <td>{val.warrentyInformation}</td>
                  <td>{val.stock}</td>
                  <td>{val.returnPolicy}</td>
                  <td>{val.availabilityStatus}</td>
                  <td>{val.reviews}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ShowUser;
