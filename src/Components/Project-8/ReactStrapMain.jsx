import React, { useState } from "react";
import { Input, Table } from "reactstrap";

const ReactStrapMain = () => {
  const [data, setData] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const dummyData = [
    {
      Column4: "Sophia",
      Column5: "Johnson",
      Column6: "25",
    },
    {
      Column4: "Liam",
      Column5: "Williams",
      Column6: "28",
    },
    {
      Column4: "Olivia",
      Column5: "Brown",
      Column6: "32",
    },
    {
      Column4: "Noah",
      Column5: "Jones",
      Column6: "29",
    },
    {
      Column4: "Ethan",
      Column5: "Taylor",
      Column6: "40",
    },
  ];

  let combinedData;
  console.log(data.length, dummyData.length);
  if (data.length < dummyData.length) {
    combinedData = dummyData.map((row, index) => {
      const { Column4, Column5, Column6 } = row;
      const additionalColumns = data[index] || ["", "", ""];
      console.log(additionalColumns);
      return [...additionalColumns, Column4, Column5, Column6];
    });
  } else {
    combinedData = data.map((row, index) => {
      const additionalColumns = dummyData[index] || {};
      console.log(additionalColumns);
      return [
        additionalColumns.Column4 || "",
        additionalColumns.Column5 || "",
        additionalColumns.Column6 || "",
        ...row,
        additionalColumns.Column4 || "",
        additionalColumns.Column5 || "",
        additionalColumns.Column6 || "",
      ];
    });
  }

  // combinedData = data.map((row, index) => {
  //   const additionalColumns = dummyData[index] || {};
  //   console.log(additionalColumns);
  //   return [
  //     ...row,
  //     additionalColumns.Column4 || "",
  //     additionalColumns.Column5 || "",
  //     additionalColumns.Column6 || "",
  //   ];
  // });

  console.log(combinedData);
  const handlePaste = (e) => {
    e.preventDefault();
    console.log(combinedData);
    const clipBoardData = e.clipboardData.getData("text");
    console.log(clipBoardData);
    const rowData = clipBoardData
      .split("\n")
      .filter((val) => val.trim() !== "")
      .map((val) => val.trim());
    const newData = rowData.map((val) => val.split("\t"));
    newData.map((val) => console.log(val));
    if (newData.length > combinedData.length) {
      alert("The copied data is greater than the table data");
      return;
    }

    newData[0].length === 5
      ? setData(newData)
      : alert("The pasted is not in correct format");
  };

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>S No</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date</th>
            <th>Phone No</th>
            <th>Emplyee No</th>
            <th>Mobile No</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                {row.map((val, index) => {
                  return index <= 4 ? (
                    <td key={index}>
                      <Input value={val} type="text" onPaste={handlePaste} />
                    </td>
                  ) : (
                    <td key={index}>{val}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ReactStrapMain;
