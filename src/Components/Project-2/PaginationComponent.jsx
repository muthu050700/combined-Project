import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = ({
  limit,
  setLimit,
  currentPage,
  totalPage,
  setCurrenctPage,
}) => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex justify-between mx-3 ">
      <div>
        <select
          name="selectLimit"
          className="w-[100px] border border-black"
          onChange={(e) => {
            if (currentPage > totalPage) {
              setCurrenctPage(1);
              setLimit(e.target.value);
            } else {
              setLimit(e.target.value);
            }
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="flex gap-4 mx-3">
        <p className="font-bold text-lg flex items-center">
          Page of {currentPage + 1} of {Math.ceil(totalPage / limit)}
        </p>
        <form>
          <input
            type="number"
            onChange={(e) =>
              setCurrenctPage(e.target.value > 0 && e.target.value - 1)
            }
            placeholder="1"
            className="w-[70px] flex items-center justify-center border border-black py-1 px-1"
          />
        </form>
        <div className="flex">
          <Pagination>
            <PaginationItem>
              <PaginationLink
                previous
                onClick={() => {
                  if (currentPage > 0) {
                    setCurrenctPage(currentPage - 1);
                  }
                }}
              />
            </PaginationItem>
          </Pagination>
          <Pagination>
            <PaginationItem>
              <PaginationLink
                next
                onClick={() => {
                  if (currentPage + 1 < Math.ceil(totalPage / limit)) {
                    setCurrenctPage(currentPage + 1);
                  }
                }}
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
