import React from "react";
import { Link } from "react-router-dom";

const BarChartHome = () => {
  return (
    <>
      <div className=" flex">
        <Link to="/">
          <p className=" bg-amber-400 px-3 py-1 rounded-md mx-2 text-lg font-medium text-white w-fit mt-2">
            Home
          </p>
        </Link>
        <Link to="/charts">
          <p className=" bg-orange-400 px-3 py-1 rounded-md mx-2 text-lg font-medium text-white w-fit mt-2">
            Back
          </p>
        </Link>
      </div>

      <div className="flex flex-wrap gap-5  justify-start mt-5 mx-2 ">
        <Link to="/barChart1">
          <div className=" bg-gray-200 w-[300px] h-fit rounded-lg px-3 pt-2 pb-3 shadow-md">
            <p className=" text-xl font-bold text-center text-black py-2">
              Chart 1
            </p>
            <p className=" text-md text-gray-600">
              In this task, I have created a line chart using hard-coded data.
            </p>
          </div>
        </Link>
        <Link to="/barChart2">
          <div className=" bg-gray-200 w-[300px] h-fit rounded-lg px-3 pt-2 pb-3 shadow-md">
            <p className=" text-xl font-bold text-center text-black py-2">
              Chart 2
            </p>
            <p className=" text-md text-gray-600">
              In this task, I have created a line chart using hard-coded data.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BarChartHome;
