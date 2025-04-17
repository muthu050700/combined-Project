import React from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";
import PaginationComponent from "./PaginationComponent";
import TableHeader from "./TableHeader";
import Filter from "./Filter";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrenctPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");
  const [tempData, setTempData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedIds, setSelectIds] = useState([]);
  console.log(selectedIds, selectAll);
  useEffect(() => {
    fetchApi();
  }, [limit, currentPage]);

  const fetchApi = () => {
    axios
      .get(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          currentPage * limit
        }`
      )
      .then((res) => {
        setTempData(res.data.products);
        setTotalPage(res.data.total);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (filteredData.length <= limit) {
      setTempData(filteredData);
    } else {
      const data = filteredData.slice(
        currentPage * limit,
        (currentPage + 1) * limit
      );
      setFilteredData(data);
    }
  }, [filteredData]);

  const handleSelectInput = (id) => {
    if (selectedIds.length === 0) {
      setSelectIds([id]);
    } else {
      const ids = !selectedIds.includes(id)
        ? [...selectedIds, id]
        : selectedIds.filter((val) => val !== id);
      setSelectIds(ids);
    }
  };
  console.log(selectedIds);
  return (
    <>
      <div className="flex justify-between my-3 mx-2">
        <div>
          <Filter
            data={data}
            setFilteredData={setFilteredData}
            selectedIds={selectedIds}
            tempData={tempData}
          />
        </div>
        <div>
          <SearchFilter
            search={search}
            setSearch={setSearch}
            setTempData={setTempData}
            setTotalPage={setTotalPage}
            limit={limit}
            setLimit={setLimit}
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrenctPage={setCurrenctPage}
            setFilteredData={setFilteredData}
            data={data}
            setData={setData}
          />
        </div>
      </div>
      <div>
        <Table striped>
          <TableHeader
            data={data}
            tempData={tempData}
            setFilteredData={setFilteredData}
            selectAll={selectAll}
            setSelectAll={setSelectAll}
            setSelectIds={setSelectIds}
            selectedIds={selectedIds}
          />
          <tbody>
            {search.length === 0
              ? tempData.map((value, index) => {
                  return (
                    <tr key={value.id}>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(value.id)}
                        onChange={() => handleSelectInput(value.id)}
                      />
                      <th scope="row">{currentPage * limit + index + 1}</th>
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
                  );
                })
              : filteredData.map((value, index) => {
                  return (
                    <tr key={value.id}>
                      <th scope="row">{currentPage * limit + index + 1}</th>
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
                  );
                })}
          </tbody>
        </Table>
      </div>
      <div>
        <PaginationComponent
          limit={limit}
          setLimit={setLimit}
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrenctPage={setCurrenctPage}
        />
      </div>
    </>
  );
};

export default DataTable;
