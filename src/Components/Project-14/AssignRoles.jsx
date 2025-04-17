import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Table } from "reactstrap";
const AssignRoles = () => {
  const fabricData = [
    {
      RollNo: "AR24402SA1",
      Fabric: "C010000BL000FB",
      Color: "WHITE",
      Material: "Mainfabric",
      Shade: "B",
      ShrinkL: -2.25,
      ShrinkW: -3.5,
      GSM: 55.5,
      Width: 55.5,
      Length: 151.5,
      Location: "",
      UnitCode: "",
      WhCategory: "",
      NettWt: 5,
      TareWt: 5,
    },
    {
      RollNo: "AR24402SA2",
      Fabric: "C010000BL000FB",
      Color: "WHITE",
      Material: "Mainfabric",
      Shade: "B",
      ShrinkL: -2.58,
      ShrinkW: -3.42,
      GSM: 55.5,
      Width: 55.5,
      Length: 174.5,
      Location: "",
      UnitCode: "",
      WhCategory: "",
      NettWt: 5,
      TareWt: 5,
    },
    {
      RollNo: "AR24402SA2",
      Fabric: "C010000BL000FB",
      Color: "WHITE",
      Material: "Mainfabric",
      Shade: "B",
      ShrinkL: -2.58,
      ShrinkW: -3.42,
      GSM: 55.5,
      Width: 55.5,
      Length: 174.5,
      Location: "",
      UnitCode: "",
      WhCategory: "",
      NettWt: 5,
      TareWt: 5,
    },
  ];

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("AssignRolls");

    const header = worksheet.addRow([...Object.keys(fabricData[0])]);
    header.font = { bold: true, size: 12 };
    header.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };
    });
    const columnWidths = [
      12, 15, 20, 10, 10, 12, 15, 10, 10, 10, 10, 12,

      25, 20, 20, 10,
    ];
    columnWidths.forEach((width, index) => {
      worksheet.getColumn(index + 1).width = width;
    });
    header.alignment = { horizontal: "center" };

    fabricData.forEach((val) => {
      const dataRow = worksheet.addRow([...Object.values(val)]);
      dataRow.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      "AssignRolls.xlsx"
    );
  };
  return (
    <div>
      <div className=" flex justify-end">
        <button
          onClick={exportToExcel}
          style={{
            backgroundColor: "orange",
            color: "white",
            paddingBlock: "4px",
            paddingInline: "3px",
            borderRadius: "3px",
            margin: "5px",
          }}
        >
          Download
        </button>
      </div>

      <div>
        <Table>
          <thead>
            <tr>
              {Object.keys(fabricData[0]).map((th) => {
                return (
                  <>
                    <td
                      style={{ border: "1px solid black", fontWeight: "bold" }}
                    >
                      {th}
                    </td>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {fabricData.map((val) => {
              return (
                <tr>
                  {Object.values(val).map((td) => {
                    return <td style={{ border: "1px solid black" }}>{td}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AssignRoles;
