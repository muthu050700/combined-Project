import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import axios from "axios";

const DataTableApi = () => {
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, [currentPage, limit]);

  const fetchApi = () => {
    axios
      .get("https://dummyjson.com/products?limit=194")
      .then((res) => {
        setTempData(res.data.products);
        setData(res.data.products);
        setTotalPages(Math.ceil(res.data.total / limit));
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <DataTable
        data={data}
        currentPage={currentPage}
        limit={limit}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        tempData={tempData}
        setTempData={setTempData}
        setLimit={setLimit}
        setData={setData}
        setTotalPages={setTotalPages}
      />
    </>
  );
};

export default DataTableApi;
