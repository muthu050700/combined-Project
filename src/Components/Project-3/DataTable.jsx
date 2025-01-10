import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

const DataTable = ({
  data,
  currentPage,
  limit,
  totalPages,
  setCurrentPage,
  tempData,
  setTempData,
  setTotalPages,
  setLimit,
  setData,
}) => {
  const [search, setSearch] = useState({
    searchText: "",
  });

  const [filterSearchData, setFilterSearchData] = useState([]);
  const [pageInput, setPageInput] = useState(1);
  const [filterList, setFilterList] = useState({
    price: "",
    title: "",
    category: "",
  });
  const [showFilterList, setShowFilterList] = useState(false);

  useEffect(() => {
    const slicedData = tempData.slice(
      (currentPage - 1) * limit,
      currentPage * limit
    );
    setTempData(slicedData);
  }, [data]);

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    handlePriceFilterSearch();
  }, [filterList.price]);

  useEffect(() => {
    handleTitleFilterSearch();
  }, [filterList.title]);

  useEffect(() => {
    handleCategoryFilterSearch();
  }, [filterList.category]);

  const handleCategoryFilterSearch = () => {
    const { category } = filterList;
    const filterData = data.filter((val) => {
      return String(val.category).toLowerCase().includes(category);
    });
    setTempData(category.length >= 1 ? filterData : data);
  };
  const handlePriceFilterSearch = () => {
    const { price, title } = filterList;
    const filterData = data.filter((val) => {
      return (
        String(val.price).toLowerCase().includes(price) ||
        String(val.title).toLowerCase().includes(title)
      );
    });
    setTempData(price.length >= 1 ? filterData : data);
  };

  const handleTitleFilterSearch = () => {
    const { title } = filterList;
    const filterData = data.filter((val) => {
      return String(val.title).toLowerCase().includes(title);
    });
    setTempData(title.length >= 1 ? filterData : data);
  };

  useEffect(() => {
    if (filterSearchData.length <= limit) {
      setTotalPages(Math.ceil(filterSearchData.length / limit));
      setTempData(filterSearchData);
    } else {
      setTotalPages(Math.ceil(filterSearchData.length / limit));
      setCurrentPage(1);
      setTempData(
        filterSearchData.slice((currentPage - 1) * limit, currentPage * limit)
      );
    }
  }, [filterSearchData]);

  const handleSearch = () => {
    if (search.searchText.trim() === "") {
      const slicedData = data.slice(
        (currentPage - 1) * limit,
        currentPage * limit
      );
      setTempData(slicedData);
    } else {
      const filterTable = data.filter((val) => {
        return (
          String(val.title)
            .toLowerCase()
            .includes(String(search.searchText.toLowerCase())) ||
          String(val.price)
            .toLowerCase()
            .includes(search.searchText.toLocaleLowerCase()) ||
          String(val.category)
            .toLowerCase()
            .includes(String(search.searchText.toLowerCase())) ||
          String(val.warrantyInformation)
            .toLowerCase()
            .includes(String(search.searchText.toLowerCase())) ||
          String(val.stock)
            .toLowerCase()
            .includes(search.searchText.toLowerCase()) ||
          String(val.returnPolicy)
            .toLowerCase()
            .includes(String(search.searchText.toLowerCase())) ||
          String(val.availabilityStatus)
            .toLowerCase()
            .includes(String(search.searchText.toLowerCase())) ||
          String(val.reviews[0].comment)
            .toLowerCase()
            .includes(String(search.searchText.toLowerCase()))
        );
      });
      setFilterSearchData(filterTable);
    }
  };

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleDataChange = (value) => {
    setLimit(value);
  };

  const handleInputChange = (e) => {
    setPageInput(e.target.value);
    setCurrentPage(Number(e.target.value !== "" && e.target.value));
  };

  const handleAscending = (value) => {
    console.log(value);
    const ascendingData = tempData.sort(function (a, b) {
      if (a[value] > b[value]) {
        return 1;
      } else {
        return -1;
      }
    });

    setTempData([...ascendingData]);
  };

  const handleDescending = (value) => {
    const descendingData = tempData.sort(function (a, b) {
      if (a[value] < b[value]) {
        return 1;
      } else {
        return -1;
      }
    });

    setTempData([...descendingData]);
  };

  const handleFilterForm = (e) => {
    setFilterList({
      ...filterList,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex  py-2">
        <div className="flex  justify-between py-5 w-full">
          <div className="flex">
            <Link to="/">
              <p className=" bg-amber-400 px-3 py-1 rounded-sm ml-2 w-fit text-lg font-medium text-white">
                Home
              </p>
            </Link>

            <button
              className=" bg-orange-500 px-2 h-[36px] rounded-sm ml-3"
              onClick={() => setShowFilterList(!showFilterList)}
            >
              Filter
            </button>
            {showFilterList && (
              <form className="w-fit h-fit shadow-2xl z-10 absolute bg-gray-500 px-3 py-2 flex gap-3">
                <label>Price: </label>
                <input
                  type="text"
                  name="price"
                  value={filterList.price}
                  onChange={handleFilterForm}
                  className=" border border-black rounded-sm "
                />
                <label>title: </label>
                <input
                  type="text"
                  name="title"
                  value={filterList.title}
                  onChange={handleFilterForm}
                  className=" border border-black rounded-sm "
                />
                <label>category: </label>
                <input
                  type="text"
                  name="category"
                  value={filterList.category}
                  onChange={handleFilterForm}
                  className=" border border-black rounded-sm "
                />
              </form>
            )}
          </div>
          <div>
            <input
              type="text"
              name="searchText"
              placeholder="Search"
              value={search.searchText}
              onChange={handleChange}
              className="border border-black w-[300px] px-2 py-2 mx-2 "
            />
          </div>
        </div>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>SIn</th>
            <th>
              <div className="flex justify-between w-[150px]">
                <p> title</p>
                <div className="flex px-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("title")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("title")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-full">
                <p>category</p>
                <div className="flex  px-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("category")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("category")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-[100px]">
                <p>price</p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("price")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("price")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-[100px]">
                <p>rating</p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("rating")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("rating")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-[210px]">
                <p>warrantyInformation</p>
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("warrantyInformation")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("warrantyInformation")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-full">
                <p>stock</p>
                <div className="flex gap-2 px-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("stock")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("stock")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-full">
                <p>returnPolicy</p>
                <div className="flex gap-2 px-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("returnPolicy")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("returnPolicy")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="flex justify-between w-full">
                <p>availabilityStatus</p>
                <div className="flex gap-2 px-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("availabilityStatus")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("availabilityStatus")}
                  />
                </div>
              </div>
            </th>
            <th>
              {" "}
              <div className="flex justify-between w-full">
                <p>reviews</p>
                <div className="flex gap-2 px-2">
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-lg"
                    onClick={() => handleAscending("reviews")}
                  />
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-lg"
                    onClick={() => handleDescending("reviews")}
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {tempData.map((val, index) => {
            return (
              <>
                <tr key={val.title}>
                  <th scope="row">
                    {Number(currentPage - 1) * limit + index + 1}
                  </th>
                  <td>{val.title} </td>
                  <td>{val.category}</td>
                  <td>{val.price}</td>
                  <td>{val.rating}</td>
                  <td>{val.warrantyInformation}</td>
                  <td>{val.stock}</td>
                  <td>{val.returnPolicy}</td>
                  <td>{val.availabilityStatus}</td>
                  <td>{val.reviews[0].comment}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <div className=" flex justify-between">
        <FormGroup>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            className=" w-[100px]"
            onChange={(e) => handleDataChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </Input>
        </FormGroup>
        <div className="flex gap-4">
          <p className=" flex items-center">
            page of {currentPage === 0 ? currentPage + 1 : currentPage} of
            {Math.ceil(totalPages)}
          </p>
          <input
            type="number"
            className=" border border-black w-[100px] h-[50px] font-bold px-2 text-lg"
            value={pageInput}
            onChange={(e) => handleInputChange(e)}
          />
          <Pagination aria-label="Page navigation example">
            {currentPage + 1 > 1 ? (
              <PaginationItem className=" text-[20px] font-bold border border-black">
                <PaginationLink
                  onClick={() => setCurrentPage(currentPage - 1)}
                  previous
                />
              </PaginationItem>
            ) : (
              <PaginationItem className=" text-[20px] font-bold">
                <PaginationLink previous />
              </PaginationItem>
            )}

            {currentPage + 1 <= totalPages ? (
              <PaginationItem
                onClick={() => setCurrentPage(currentPage + 1)}
                className=" text-[20px] font-bold"
              >
                <PaginationLink next />
              </PaginationItem>
            ) : (
              <PaginationItem className=" text-[20px] font-bold">
                <PaginationLink next />
              </PaginationItem>
            )}
          </Pagination>
        </div>
      </div>
      {/* <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first onClick={() => setCurrentPage(0)} />
        </PaginationItem>
        {currentPage > 0 && (
          <PaginationItem>
            <PaginationLink
              onClick={() => setCurrentPage(currentPage - 1)}
              previous
            />
          </PaginationItem>
        )}

        {[...Array(totalPages).keys()].map((pN, index) => {
          return (
            <PaginationItem key={index}>
              <PaginationLink onClick={() => setCurrentPage(pN)}>
                {pN + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {currentPage !== totalPages - 1 && (
          <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
            <PaginationLink next />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink onClick={() => setCurrentPage(totalPages - 1)} last />
        </PaginationItem>
      </Pagination> */}
    </>
  );
};

export default DataTable;
