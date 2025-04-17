import React from "react";
import { Link } from "react-router-dom";

const QcMain = () => {
  return (
    <>
      <div>
        <h2 className=" font-bold text-xl text-center py-5">QC Document</h2>
        <div className=" flex font-medium gap-5 ml-5">
          <Link to="/qc_summery">
            <p className=" bg-orange-400 px-3 py-1 rounded-sm text-white">
              QC Summery
            </p>
          </Link>
          <Link to="/qc_detail">
            <p className=" bg-orange-400 px-3 py-1 rounded-sm text-white">
              QC Detail
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QcMain;
