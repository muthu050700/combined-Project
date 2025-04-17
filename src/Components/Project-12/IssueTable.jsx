import React from "react";
import { Table } from "reactstrap";

const IssueTable = ({ tableData }) => {
  const totalRej = tableData.reduce((sum, val) => sum + val.rejected, 0);
  const Grade2 = tableData.reduce((sum, val) => sum + val.grade2, 0);
  const Grade1 = tableData.reduce((sum, val) => sum + val.grade1, 0);
  const totalUnchecked = tableData.reduce((sum, val) => sum + val.unchecked, 0);
  return (
    <>
      <Table
        style={{
          border: "0.6px solid gray",
          borderCollapse: "collapse",
          borderBottom: "none",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "0.6px solid gray" }}>SIn</th>
            <th style={{ border: "0.6px solid gray" }}>Bar Code</th>
            <th style={{ border: "0.6px solid gray" }}>Item Desc</th>
            <th style={{ border: "0.6px solid gray" }}>Color</th>
            <th style={{ border: "0.6px solid gray" }}>Size</th>
            <th style={{ border: "0.6px solid gray" }}>HsCode</th>
            <th style={{ border: "0.6px solid gray" }}>Style/Order No</th>
            <th style={{ border: "0.6px solid gray" }}>UOM</th>
            <th style={{ border: "0.6px solid gray" }}>CV/NCV</th>
            <th style={{ border: "0.6px solid gray" }}>Unchecked</th>
            <th style={{ border: "0.6px solid gray" }}>Grade 1</th>
            <th style={{ border: "0.6px solid gray" }}>Grade 2</th>
            <th style={{ border: "0.6px solid gray" }}>Rej</th>
            <th style={{ border: "0.6px solid gray" }}>Buyer</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, index) => {
            return (
              <>
                <tr
                  className=" text-[12px]"
                  style={{
                    fontWeight: "normal",
                    padding: "4px",
                    textAlign: "left",
                  }}
                >
                  <td style={{ border: "0.6px solid gray" }}>{index + 1}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.barCode}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.itemDesc}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.color}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.size}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.hsCode}</td>
                  <td style={{ border: "0.6px solid gray" }}>
                    {val.styleOrderNo}
                  </td>
                  <td style={{ border: "0.6px solid gray" }}>{val.uom}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.cv_ncv}</td>
                  <td style={{ border: "0.6px solid gray" }}>
                    {val.unchecked}
                  </td>
                  <td style={{ border: "0.6px solid gray" }}>{val.grade1}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.grade2}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.rejected}</td>
                  <td style={{ border: "0.6px solid gray" }}>{val.buyer}</td>
                </tr>
              </>
            );
          })}
          <tr>
            <td style={{ border: "0.6px solid gray" }} colSpan="9">
              Total
            </td>

            <td style={{ border: "0.6px solid gray" }}>{totalUnchecked}</td>
            <td style={{ border: "0.6px solid gray" }}>{Grade1}</td>
            <td style={{ border: "0.6px solid gray" }}>{Grade2}</td>
            <td style={{ border: "0.6px solid gray" }}>{totalRej}</td>
            <td style={{ border: "0.6px solid gray" }}>{""}</td>
          </tr>
          <tr className="no-border border-none">
            <td colSpan="14"></td>
          </tr>
          <tr className="no-border border-none">
            <td colSpan="14"></td>
          </tr>
          <tr className="no-border border-none">
            <td colSpan="14"></td>
          </tr>
          <tr className="no-border border-none">
            <td colSpan="14"></td>
          </tr>
          <tr className="no-border border-none">
            <td colSpan="14">Admin</td>
          </tr>
          <tr className="no-border border-none">
            <td colSpan="4">Prepared By</td>
            <td colSpan="4">Checked By</td>
            <td colSpan="4">Authorised By</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default IssueTable;
