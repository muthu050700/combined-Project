import React from "react";
import { Link } from "react-router-dom";

const Mapping = () => {
  return (
    <>
      <Link to="/">
        <p className=" bg-amber-400 px-3 py-1 rounded-md mx-2 text-lg font-medium text-white w-fit mt-2">
          Home
        </p>
      </Link>
      <div className="flex flex-wrap gap-5  justify-start mt-5 mx-2 ">
        <a href="/markmap.html">
          <div className=" bg-gray-200 w-[300px] h-fit rounded-lg px-3 pt-2 pb-3 shadow-md">
            <p className=" text-xl font-bold text-center text-black py-2">
              Map 1
            </p>
            <p className=" text-md text-gray-600">
              Markmap for Gin, which includes headers, inventory capture, style
              allocation, and gin details.
            </p>
          </div>
        </a>
        <a href="/markmap.html">
          <div className=" bg-gray-200 w-[300px] h-fit rounded-lg px-3 pt-2 pb-3 shadow-md">
            <p className=" text-xl font-bold text-center text-black py-2">
              Map 2
            </p>
            <p className=" text-md text-gray-600">
              Markmap for Gin, which includes headers, inventory capture, style
              allocation, and gin details.
            </p>
          </div>
        </a>

        <a href="/markmap.html">
          <div className=" bg-gray-200 w-[300px] h-fit rounded-lg px-3 pt-2 pb-3 shadow-md">
            <p className=" text-xl font-bold text-center text-black py-2">
              Map 3
            </p>
            <p className=" text-md text-gray-600">
              Markmap for Gin, which includes headers, inventory capture, style
              allocation, and gin details.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Mapping;
