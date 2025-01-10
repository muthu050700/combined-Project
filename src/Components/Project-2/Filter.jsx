import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Filter = ({ data, setFilteredData, selectedIds, tempData }) => {
  const [showFilterList, setShowFilterList] = useState(false);
  const [filterList, setFilterList] = useState({
    price: "",
    title: "",
    category: "",
  });

  let modelRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (modelRef.current && !modelRef.current.contains(e.target)) {
        setShowFilterList(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    handlePriceFilterSearch();
  }, [filterList.price]);

  useEffect(() => {
    handleTitleFilterSearch();
  }, [filterList.title]);

  useEffect(() => {
    handleCategoryFilterSearch();
  }, [filterList.category]);

  const handlePriceFilterSearch = () => {
    const { price } = filterList;
    const filterData = data.filter((val) => {
      return String(val.price).toLowerCase().includes(price);
    });
    setFilteredData(price.length >= 1 ? filterData : data);
  };
  const handleCategoryFilterSearch = () => {
    const { category } = filterList;
    const filterData = data.filter((val) => {
      return String(val.category).toLowerCase().includes(category);
    });
    setFilteredData(category.length >= 1 ? filterData : data);
  };
  const handleTitleFilterSearch = () => {
    const { title } = filterList;
    const filterData = data.filter((val) => {
      return String(val.title).toLowerCase().includes(title);
    });
    setFilteredData(title.length >= 1 ? filterData : data);
  };

  // useEffect(() => {
  //   searchApi();
  // }, []);
  // const searchApi = () => {
  //   axios.get(`https://dummyjson.com/products/search?q=${""}`).then((res) => {
  //     setFilteredData(res.data.products);
  //   });
  // };

  const handleFilterForm = (e) => {
    setFilterList({
      ...filterList,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <div className=" flex gap-3">
          <Link to="/">
            <p className=" bg-amber-400 px-3 py-1 rounded-sm ml-2 text-lg font-medium text-white">
              Home
            </p>
          </Link>
          <div>
            <button
              className=" bg-orange-400 px-2 py-1 rounded-sm text-lg"
              onClick={() => setShowFilterList(!showFilterList)}
            >
              Filter
            </button>
          </div>
          {selectedIds.length !== 0 && (
            <Link to="/selectedLists" state={{ selectedIds, tempData }}>
              <div className=" bg-emerald-400 px-2 py-1 rounded-sm text-lg">
                <p>View selected list</p>
              </div>
            </Link>
          )}

          <div className="flex justify-end ">
            <button
              className=" bg-gray-400 px-2 py-1 rounded-sm text-lg"
              onClick={(e) => {
                e.stopPropagation();
                setFilterList({
                  price: "",
                  title: "",
                  category: "",
                });
                setFilteredData(data);
              }}
            >
              Clear Filter
            </button>
          </div>
        </div>

        {showFilterList && (
          <div className="w-fit h-fit shadow-2xl z-10 absolute bg-gray-500 px-3 py-3 rounded-md">
            <div className=" flex gap-3 ml-4">
              <form ref={modelRef}>
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
