import React, { useEffect, useRef, useState } from "react";
import { Table } from "reactstrap";

const GinTable = ({ setTableWidth }) => {
  const tableRef = useRef(null);

  const tableData = [
    {
      PoNo: "IF240161",
      BuyerDiv: "",
      StyleOrderNo: "723809-D60388 SP25~41224",
      ItemCode: "LI55CT45SD000FB",
      Color: "TOMATOSAUCE/180",
      Size: '51"CTBL',
      ItemDescription:
        "55% LINEN 45% COTTON S/D FABRIC # RD283007 55% LINEN 45% COTTON S/D FABRIC # RD283007 55% LINEN 45% COTTON S/D FABRIC # RD283007 55% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD283007vv55% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD28300755% LINEN 45% COTTON S/D FABRIC # RD283007",
      Uom: "MTR",
      GinQty: 6736.12,
      CV: "",
      Unchecked: "",
      QC: 6735.62,
      LabQty: 0.5,
    },
  ];

  useEffect(() => {
    const calculateTableWidth = () => {
      if (tableRef.current) {
        let totalWidth = 0;
        const columnWidths = tableRef.current.querySelectorAll("th");
        columnWidths.forEach((column) => {
          totalWidth += column.offsetWidth; // Add the width of each column
        });

        setTableWidth(totalWidth);
      }
    };

    calculateTableWidth(); // Calculate on mount

    // Optionally, recalculate on window resize
    window.addEventListener("resize", calculateTableWidth);
    return () => window.removeEventListener("resize", calculateTableWidth);
  }, []);

  const TotalGinQty = tableData.reduce((sum, val) => sum + val.GinQty, 0);
  const TotalQC = tableData.reduce((sum, val) => sum + val.QC, 0);
  const TotalLabQty = tableData.reduce((sum, val) => sum + val.LabQty, 0);
  return (
    <div ref={tableRef}>
      <Table
        bordered
        className="m-0 table "
        style={{ border: "0.6px solid gray", borderCollapse: "collapse" }}
      >
        <thead>
          <tr
            className="text-[14px] gin-table"
            style={{ backgroundColor: "blue" }}
          >
            <th>PoNo</th>
            <th>Buyer Div</th>
            <th>Style / Order No</th>
            <th>Item Code</th>
            <th>Color</th>
            <th>Size</th>
            <th>Item Description</th>
            <th>Uom</th>
            <th>GinQty</th>
            <th>CV</th>
            <th>Unchecked</th>
            <th>QC</th>
            <th>Lab Qty</th>
            <th>CV</th>
            <th>Unchecked</th>
            <th>QC</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val) => {
            return (
              <tr
                className=" text-[12px]"
                style={{
                  fontWeight: "normal",
                  padding: "4px",
                  textAlign: "left",
                  border: "0.6px solid gray",
                }}
              >
                <th scope="row">{val.PoNo}</th>
                <td>{val.BuyerDiv}</td>
                <td>{val.StyleOrderNo}</td>
                <td>{val.ItemCode}</td>
                <td>{val.Color}</td>
                <td>{val.Size}</td>
                <td>{val.ItemDescription}</td>
                <td>{val.Uom}</td>
                <td>{val.GinQty}</td>
                <td>{val.CV}</td>
                <td>{val.Unchecked}</td>
                <td>{val.QC}</td>
                <td>{val.LabQty}</td>
              </tr>
            );
          })}
          <tr
            style={{
              border: "0.6px solid gray",
            }}
          >
            <td
              colSpan={8}
              className="text-[12px]"
              style={{ fontWeight: "medium" }}
            >
              Total:{" "}
            </td>
            <td className=" text-[12px]" style={{ fontWeight: "medium" }}>
              {TotalGinQty}
            </td>
            <td>{""}</td>
            <td>{""}</td>
            <td className="text-[12px]" style={{ fontWeight: "medium" }}>
              {TotalQC}
            </td>
            <td className="text-[12px]" style={{ fontWeight: "medium" }}>
              {TotalLabQty}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default GinTable;
