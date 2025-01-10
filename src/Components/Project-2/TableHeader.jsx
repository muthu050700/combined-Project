import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
const TableHeader = ({
  setFilteredData,
  selectAll,
  setSelectAll,
  selectedIds,
  setSelectIds,
  tempData,
}) => {
  const [filter, setFilter] = useState({
    title: null,
    category: null,
    price: null,
    rating: null,
    warrantyInformation: null,
    stock: null,
    returnPolicy: null,
    availabilityStatus: null,
    reviews: null,
  });

  const [value, setValue] = useState("");

  const [tableSort, setTableSort] = useState("");

  const [showIcon, setShowIcon] = useState({
    title: null,
    category: null,
    price: null,
    rating: null,
    warrantyInformation: null,
    stock: null,
    returnPolicy: null,
    availabilityStatus: null,
    reviews: null,
  });

  useEffect(() => {
    handleFilter(value);
  }, [value, tableSort]);

  const handleFilter = () => {
    axios
      .get(`https://dummyjson.com/products?sortBy=${value}&order=${tableSort}`)
      .then((res) => {
        setFilteredData(res.data.products);
      });
  };

  const handleSelectAllCheckBox = () => {
    if (selectAll) {
      setSelectIds([]);
    } else {
      setSelectIds(tempData.map((val) => val.id));
    }
    setSelectAll(!selectAll);
  };

  return (
    <>
      <thead>
        <tr>
          <th className=" w-[100px] ">
            <input
              type="checkbox"
              name=""
              value={""}
              checked={selectAll}
              onChange={handleSelectAllCheckBox}
            />
            SelectAll
          </th>
          <th>SIn</th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("title");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p>Title</p>
              {tableSort === "desc" && value === "title" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "title" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
            {/* {tableSort === "desc" && (
              <MdClear
                size={20}
                onClick={() => {
                  setShowIcon({ title: null });
                }}
              />
            )}
            {tableSort === "asc" && (
              <MdClear
                size={20}
                onClick={() => {
                  setTableSort("");
                }}
              />
            )} */}
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("category");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p>Category</p>{" "}
              {tableSort === "desc" && value === "category" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "category" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("price");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p>Price</p>{" "}
              {tableSort === "desc" && value === "price" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "price" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("rating");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p>Rating</p>{" "}
              {tableSort === "desc" && value === "rating" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "rating" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("warrantyInformation");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p> Warrenty Information</p>{" "}
              {tableSort === "desc" && value === "warrantyInformation" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "warrantyInformation" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("stock");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p>Stock</p>{" "}
              {tableSort === "desc" && value === "stock" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "stock" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("returnPolicy");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p> Return Policy</p>
              {tableSort === "desc" && value === "returnPolicy" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "returnPolicy" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("availabilityStatus");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p> Availability Status</p>
              {tableSort === "desc" && value === "availabilityStatus" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "availabilityStatus" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
          <th>
            <div
              className=" flex justify-between w-full  items-center cursor-pointer"
              onClick={() => {
                setValue("reviews");
                setTableSort(tableSort === "asc" ? "desc" : "asc");
              }}
            >
              <p>Reviews</p>
              {tableSort === "desc" && value === "reviews" && (
                <div className=" flex items-end">
                  <FaAngleDown size={20} />
                </div>
              )}
              {tableSort === "asc" && value === "reviews" && (
                <div>
                  <FaAngleUp size={20} />
                </div>
              )}
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
