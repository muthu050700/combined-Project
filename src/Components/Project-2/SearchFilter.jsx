import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchFilter = ({
  search,
  setSearch,
  setFilteredData,
  data,
  setData,
  setTotalPage,
  setCurrenctPage,
  currentPage,
  limit,
}) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    searchApi();
  }, [search]);

  const searchApi = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = response.data;
    setFilteredData(data.products || []);
    setCurrenctPage(0);

    setTotalPage(Math.ceil(data.total || 1 / limit));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search"
          name="search"
          className=" border border-s-black px-2 py-1 mr-3"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default SearchFilter;
