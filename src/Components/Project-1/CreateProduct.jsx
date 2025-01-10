import React, { useState } from "react";
import UserCreateTable from "./CreateProductTable";
import { useDispatch, useSelector } from "react-redux";
import { addRowDetails } from "../Store/EditFormDetails";
import { Link } from "react-router-dom";
const CreateUser = () => {
  const formDetails = useSelector((store) => store.formDetails.formDetails);

  const dispatch = useDispatch();
  const handleAddRow = () => {
    const prodObj = {
      title: "",
      category: "",
      price: "",
      rating: "",
      warrentyInformation: "",
      stock: "",
      returnPolicy: "",
      availabilityStatus: "",
      reviews: "",
    };
    dispatch(addRowDetails(prodObj));
    // setAddRow([...addRow, prodObj]);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-2xl py-4 font-bold">Create Product</h1>

        <div className="  flex justify-between">
          <Link to="/">
            <p className=" bg-amber-400 px-3 py-1 rounded-md mx-2 text-lg font-medium text-white">
              Home
            </p>
          </Link>
          <button
            className=" bg-green-600 px-3 py-1 rounded-md mx-2 text-lg font-medium text-white"
            onClick={handleAddRow}
          >
            Add Row
          </button>
        </div>
        <UserCreateTable />
      </div>
    </>
  );
};

export default CreateUser;
