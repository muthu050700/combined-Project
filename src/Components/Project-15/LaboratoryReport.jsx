import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Table } from "reactstrap";

const LaboratoryReport = () => {
  const data = [
    {
      unit: "unit_value",
      supplier: "supplier_value",
      matDescription: "matDescription_value",
      matCode: "1234567890123456789012345",
      matColor: "1234567890123456789012345",
      matSize: "1234567890123456789012345",
      impRefNos: "impRefNos_value",
      poNos: "poNos_value",
      stdWarpLength: 50,
      stdWeftLength: 50,
      widthEntryUOM: "CM",
      widthConversionUOM: "inch",
      uom: "CM",
      skewUOM: "cm",
      repeatUOM: "CM",

      tableData: [
        {
          barcodeId: "N/A",
          length: "length_value",
          shade: "shade_value",
          avgWarpPercent: -4.43,
          avgWeftPercent: "avgWeftPercent_value",
          warpL1: 49.25,
          warpL2: -4.5,
          warpL3: 49,
          weftL1: 49,
          weftL2: 51,
          weftL3: 51,
          csv: "y/n",
          rld: "rld_value",
          minWidthCM: 145,
          skewCM: 6,
          skewPercent: "4.14%",
          gsm: 256,
          stdWarpRepeat: "stdWarpRepeat_value",
          stdWeftRepeat: "stdWeftRepeat_value",
          repeatWarp: "repeatWarp_value",
          repeatWeft: "repeatWeft_value",
          tensile: "tensile_value",
          homeLaundry: "homeLaundry_value",
          lrNo: "lrNo_value",
          invNo: "invNo_value",
          supRolNo: "supRolNo_value",
          impRefNo: "impRefNo_value",
          lfNo: "lfNo_value",
          buyerDiv: "buyerDiv_value",
          order: "order_value",
          styleNo: "styleNo_value",
          unit: "unit_value",
          rackLocation: "rackLocation_value",
        },
        {
          barcodeId: "N/A",
          length: "length_value",
          shade: "shade_value",
          avgWarpPercent: -4.43,
          avgWeftPercent: "avgWeftPercent_value",
          warpL1: 49.25,
          warpL2: -4.5,
          warpL3: 49,
          weftL1: 49,
          weftL2: 51,
          weftL3: 51,
          csv: "y/n",
          rld: "rld_value",
          minWidthCM: 145,
          skewCM: 6,
          skewPercent: "4.14%",
          gsm: 256,
          stdWarpRepeat: "stdWarpRepeat_value",
          stdWeftRepeat: "stdWeftRepeat_value",
          repeatWarp: "repeatWarp_value",
          repeatWeft: "repeatWeft_value",
          tensile: "tensile_value",
          homeLaundry: "homeLaundry_value",
          lrNo: "lrNo_value",
          invNo: "invNo_value",
          supRolNo: "supRolNo_value",
          impRefNo: "impRefNo_value",
          lfNo: "lfNo_value",
          buyerDiv: "buyerDiv_value",
          order: "order_value",
          styleNo: "styleNo_value",
          unit: "unit_value",
          rackLocation: "rackLocation_value",
        },
      ],
    },
  ];

  const generateExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Physical Report");

    const title = worksheet.addRow(["Laboratory Report"]);
    title.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
    worksheet.mergeCells(["A1:AG1"]);
    title.font = {
      bold: true,
      size: 14,
    };

    title.alignment = {
      horizontal: "center",
    };

    worksheet.addRow([""]);
    worksheet.mergeCells("A2:AG2");
    {
      data.forEach((val) => {
        const row1 = worksheet.addRow([
          {
            richText: [
              { text: "Unit: ", font: { bold: true } },
              { text: `${val.unit}` },
            ],
          },
          {
            richText: [
              { text: "Supplier: ", font: { bold: true } },
              { text: `${val.supplier}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Mat Description: ", font: { bold: true } },
              { text: `${val.matDescription}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Mat Code/ Mat Color/ Mat Size: ", font: { bold: true } },
              { text: `${val.matCode}/${val.matColor}/${val.matSize}` },
            ],
          },
          "",
          "",
          "",
          "",
          "",
          {
            richText: [
              { text: "Imp Ref Nos: ", font: { bold: true } },
              { text: `${val.impRefNos}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Po Nos: ", font: { bold: true } },
              { text: `${val.poNos}` },
            ],
          },
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ]);

        // Apply border to each cell in the row
        // row1.eachCell((cell) => {
        //   cell.border = {
        //     top: { style: "thin" },
        //     left: { style: "thin" },
        //     bottom: { style: "thin" },
        //     right: { style: "thin" },
        //   };
        // });

        worksheet.mergeCells(row1.number, 2, row1.number, 3);
        worksheet.mergeCells(row1.number, 4, row1.number, 5);
        worksheet.mergeCells(row1.number, 6, row1.number, 11);
        worksheet.mergeCells(row1.number, 12, row1.number, 13);
        worksheet.mergeCells(row1.number, 14, row1.number, 15);
        row1.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });

        const row2 = worksheet.addRow([
          {
            richText: [
              { text: "Std. Warp length: ", font: { bold: true } },
              { text: `${val.stdWarpLength}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Std. Weft length: ", font: { bold: true } },
              { text: `${val.stdWeftLength}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Width entry UOM: ", font: { bold: true } },
              { text: `${val.widthEntryUOM}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Width Conversion UOM: ", font: { bold: true } },
              { text: `${val.widthConversionUOM}` },
            ],
          },
          "",
          {
            richText: [
              { text: "UOM: ", font: { bold: true } },
              { text: `${val.uom}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Skew UOM: ", font: { bold: true } },
              { text: `${val.skewUOM}` },
            ],
          },
          "",
          {
            richText: [
              { text: "Repeat UOM: ", font: { bold: true } },
              { text: `${val.repeatUOM}` },
            ],
          },
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ]);

        // Apply border to each cell in the row
        // row2.eachCell((cell) => {
        //   cell.border = {
        //     top: { style: "thin" },
        //     left: { style: "thin" },
        //     bottom: { style: "thin" },
        //     right: { style: "thin" },
        //   };
        // });

        worksheet.mergeCells(row2.number, 1, row2.number, 2);
        worksheet.mergeCells(row2.number, 3, row2.number, 4);
        worksheet.mergeCells(row2.number, 5, row2.number, 6);
        worksheet.mergeCells(row2.number, 7, row2.number, 8);
        worksheet.mergeCells(row2.number, 9, row2.number, 10);
        worksheet.mergeCells(row2.number, 11, row2.number, 12);
        worksheet.mergeCells(row2.number, 13, row2.number, 14);
        // const row2Width = [
        //   "20",
        //   "20",
        //   "20",
        //   "10",
        //   "40",
        //   "10",
        //   "40",
        //   "10",
        //   "20",
        //   "10",
        //   "20",
        //   "10",
        //   "20",
        //   "10",
        // ];

        // row2Width.forEach(
        //   (width, ind) => (worksheet.getColumn(ind + 1).width = width)
        // );

        worksheet.addRow([""]);
        worksheet.mergeCells("A5:AG5");
        const tableHeader = worksheet.addRow([
          ...Object.keys(val.tableData[0]),
        ]);
        // tableHeader.eachCell((cell) => {
        //   cell.border = {
        //     top: { style: "thin" },
        //     left: { style: "thin" },
        //     bottom: { style: "thin" },
        //     right: { style: "thin" },
        //   };
        // });

        const headerWidth = [
          "17",
          "10",
          "10",
          "18",
          "27",
          "10",
          "10",
          "10",
          "10",
          "10",
          "10",
          "10",
          "10",
          "15",
          "11",
          "13",
          "7",
          "18",
          "18",
          "15",
          "15",
          "11",
          "17",
          "10",
          "10",
          "15",
          "15",
          "8",
          "10",
          "10",
          "10",
          "8",
          "16",
        ];
        headerWidth.forEach(
          (width, ind) => (worksheet.getColumn(ind + 1).width = width)
        );

        tableHeader.font = {
          bold: true,
          size: 12,
        };

        val.tableData.forEach((dt) => {
          const tableBody = worksheet.addRow(Object.values(dt));
        });

        worksheet.addRow([""]);
        worksheet.mergeCells(
          `A${7 + val.tableData.length}:AG${7 + val.tableData.length}`
        );

        worksheet.addRow(["Key Notes:"]);
        worksheet.mergeCells(
          `A${8 + val.tableData.length}:AG${8 + val.tableData.length}`
        );

        worksheet.getCell(`B${9 + val.tableData.length}`).value = {
          richText: [{ text: "Warp", font: { bold: true } }],
        };
        worksheet.getCell(`C${9 + val.tableData.length}`).value = {
          richText: [{ text: "Weft", font: { bold: true } }],
        };

        worksheet.getCell(`A${10 + val.tableData.length}`).value = {
          richText: [{ text: "Min", font: { bold: true } }],
        };
        worksheet.getCell(`B${10 + val.tableData.length}`).value = "-8.83";
        worksheet.getCell(`C${10 + val.tableData.length}`).value = "-8.83";

        worksheet.getCell(`A${11 + val.tableData.length}`).value = {
          richText: [{ text: "Max", font: { bold: true } }],
        };
        worksheet.getCell(`B${11 + val.tableData.length}`).value = "-8.83";
        worksheet.getCell(`C${11 + val.tableData.length}`).value = "-8.83";

        worksheet.getCell(`A${12 + val.tableData.length}`).value = {
          richText: [{ text: "Diff", font: { bold: true } }],
        };
        worksheet.getCell(`B${12 + val.tableData.length}`).value = "-8.83";
        worksheet.getCell(`C${12 + val.tableData.length}`).value = "-8.83";

        worksheet.getCell(`E${9 + val.tableData.length}`).value = "";
        worksheet.getCell(`F${9 + val.tableData.length}`).value = {
          richText: [{ text: "Length", font: { bold: true } }],
        };
        worksheet.getCell(`G${9 + val.tableData.length}`).value = {
          richText: [{ text: "No of Codes", font: { bold: true } }],
        };

        worksheet.getCell(`E${10 + val.tableData.length}`).value = {
          richText: [
            { text: "Warp weft lessthan= (+/-3%)", font: { bold: true } },
          ],
        };
        worksheet.getCell(`F${10 + val.tableData.length}`).value = "Dummy";
        worksheet.getCell(`G${10 + val.tableData.length}`).value = "Dummy";

        worksheet.getCell(`E${11 + val.tableData.length}`).value = {
          richText: [
            { text: "Warp weft morethan (+/-3%)", font: { bold: true } },
          ],
        };
        worksheet.getCell(`F${11 + val.tableData.length}`).value = "";
        worksheet.getCell(`G${11 + val.tableData.length}`).value = "";

        worksheet.getCell(`I${9 + val.tableData.length}`).value = {
          richText: [{ text: "Shade", font: { bold: true } }],
        };
        worksheet.getCell(`J${9 + val.tableData.length}`).value = {
          richText: [{ text: "Length", font: { bold: true } }],
        };
        worksheet.getCell(`K${9 + val.tableData.length}`).value = {
          richText: [{ text: "No of Codes", font: { bold: true } }],
        };

        worksheet.getCell(`I${10 + val.tableData.length}`).value = "A";
        worksheet.getCell(`J${10 + val.tableData.length}`).value = "11562";
        worksheet.getCell(`K${10 + val.tableData.length}`).value = "110";

        worksheet.getCell(`I${11 + val.tableData.length}`).value = "B";
        worksheet.getCell(`J${11 + val.tableData.length}`).value = "11562";
        worksheet.getCell(`K${11 + val.tableData.length}`).value = "110";

        worksheet.getCell(`I${12 + val.tableData.length}`).value = "C";
        worksheet.getCell(`J${12 + val.tableData.length}`).value = "11562";
        worksheet.getCell(`K${12 + val.tableData.length}`).value = "110";

        worksheet.getCell(`I${13 + val.tableData.length}`).value = {
          richText: [{ text: "Total", font: { bold: true } }],
        };
        worksheet.getCell(`J${13 + val.tableData.length}`).value = {
          richText: [{ text: "11562", font: { bold: true } }],
        };
        worksheet.getCell(`K${13 + val.tableData.length}`).value = {
          richText: [{ text: "110", font: { bold: true } }],
        };

        worksheet.getCell(`N${9 + val.tableData.length}`).value = "";
        worksheet.getCell(`O${9 + val.tableData.length}`).value = {
          richText: [{ text: "Length", font: { bold: true } }],
        };
        worksheet.getCell(`P${9 + val.tableData.length}`).value = {
          richText: [{ text: "No of rolls", font: { bold: true } }],
        };

        worksheet.getCell(`N${10 + val.tableData.length}`).value = {
          richText: [{ text: "CSV", font: { bold: true } }],
        };
        worksheet.getCell(`O${10 + val.tableData.length}`).value = "Dummy";
        worksheet.getCell(`P${10 + val.tableData.length}`).value = "Dummy";

        worksheet.getCell(`N${11 + val.tableData.length}`).value = {
          richText: [{ text: "RLD", font: { bold: true } }],
        };
        worksheet.getCell(`O${11 + val.tableData.length}`).value = "Dummy";
        worksheet.getCell(`P${11 + val.tableData.length}`).value = "Dummy";

        worksheet.getCell(`S${9 + val.tableData.length}`).value = "";
        worksheet.getCell(`T${9 + val.tableData.length}`).value = {
          richText: [{ text: "GSM", font: { bold: true } }],
        };

        worksheet.getCell(`S${10 + val.tableData.length}`).value = {
          richText: [{ text: "MIN", font: { bold: true } }],
        };
        worksheet.getCell(`T${10 + val.tableData.length}`).value = "212";

        worksheet.getCell(`S${11 + val.tableData.length}`).value = {
          richText: [{ text: "Max", font: { bold: true } }],
        };
        worksheet.getCell(`T${11 + val.tableData.length}`).value = "212";

        worksheet.getCell(`S${12 + val.tableData.length}`).value = {
          richText: [{ text: "Differenecce", font: { bold: true } }],
        };
        worksheet.getCell(`T${12 + val.tableData.length}`).value = "212";

        // worksheet.addRow([
        //   "",
        //   "Warp",
        //   "Weft",
        //   "",
        //   "",
        //   "Length ",
        //   "No of Codes",
        //   "",
        //   "Shade",
        //   "Length",
        //   "No of Codes",
        //   "",
        //   "",
        //   "Length",
        //   "No of rolls",
        //   "",
        //   "",
        //   "GSM",
        // ]);
        // worksheet.addRow([
        //   "Min",
        //   "-7.5",
        //   "-8.83",
        //   "",
        //   "Warp weft lessthan= (+/-3%)",
        //   "",
        //   "",
        //   "",
        //   "A",
        //   "11566",
        //   "110",
        //   "",
        //   "CSV",
        //   "",
        //   "",
        //   "",
        //   "MIN",
        //   "212",
        // ]);
        // worksheet.addRow([
        //   "Max",
        //   "-7.5",
        //   "-8.83",
        //   "",
        //   "Warp weft morethan (+/-3%)",
        //   "",
        //   "",
        //   "",
        //   "B",
        //   "11566",
        //   "110",
        //   "",
        //   "RLD",
        //   "",
        //   "",
        //   "",
        //   "MAX",
        //   "248",
        // ]);
        // worksheet.addRow([
        //   "Diff",
        //   "-7.5",
        //   "-8.83",
        //   "",
        //   "",
        //   "",
        //   "",
        //   "",
        //   "B",
        //   "11566",
        //   "110",
        //   "",
        //   "",
        //   "",
        //   "",
        //   "",
        //   "Differenecce",
        //   "36",
        // ]);
      });
    }

    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      "Laboratory_Report.xlsx"
    );
  };
  return (
    <div>
      <button onClick={generateExcel}>Download</button>
      <div>
        <Table>
          <thead className="lab">
            <tr>
              <th colSpan={33} style={{ textAlign: "center" }}>
                Laboratory Report
              </th>
            </tr>
            <tr>
              <th colSpan={33}>{""}</th>
            </tr>
            <tr>
              <th>
                Unit:<span style={{ fontWeight: "normal" }}> unit_value</span>
              </th>
              <th>
                Supplier:
                <span style={{ fontWeight: "normal" }}>
                  supplier_value
                </span>{" "}
              </th>
              <th>
                Mat Description:{" "}
                <span style={{ fontWeight: "normal" }}>
                  matDescription_value
                </span>
              </th>
              <th>
                Mat Code/ Mat Color/ Mat Size:
                <span style={{ fontWeight: "normal" }}>
                  1234567890123456789012345/1234567890123456789012345/1234567890123456789012345
                </span>
              </th>
              <th>
                Imp Ref Nos:{" "}
                <span style={{ fontWeight: "normal" }}> impRefNos_value</span>
              </th>
              <th>
                Po Nos:{" "}
                <span style={{ fontWeight: "normal" }}>poNos_value</span>
              </th>
            </tr>
            <tr>
              <th>
                Std. Weft length:{" "}
                <span style={{ fontWeight: "normal" }}>50</span>
              </th>
              <th>
                Width entry UOM:{" "}
                <span style={{ fontWeight: "normal" }}>CM</span>
              </th>
              <th>
                Width Conversion UOM:{" "}
                <span style={{ fontWeight: "normal" }}>inch</span>
              </th>
              <th>
                UOM: <span style={{ fontWeight: "normal" }}>CM</span>
              </th>
              <th>
                Skew UOM: <span style={{ fontWeight: "normal" }}>cm</span>
              </th>
              <th>
                Repeat UOM: <span style={{ fontWeight: "normal" }}>CM</span>
              </th>
            </tr>
            <tr>
              <th style={{ border: "none" }} colSpan={33}></th>
            </tr>
          </thead>
          <tbody>
            <td colSpan={33} style={{ border: "none" }}>
              <Table colSpan={33} className="lab">
                <thead>
                  <tr>
                    {data.map((obj, ind) => {
                      return Object.keys(obj.tableData[0]).map((th) => (
                        <th key={ind} colSpan={1}>
                          {th}
                        </th>
                      ));
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.map((obj) => {
                    return obj.tableData.map((dt, ind) => {
                      return (
                        <tr key={ind}>
                          {Object.values(dt).map((td) => {
                            return <td>{td}</td>;
                          })}
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </Table>
            </td>
            <tr>
              <th style={{ border: "none" }} colSpan={33}>
                {""}
              </th>
            </tr>
            <td colSpan={33}>
              <div style={{ display: "flex", gap: 40 }}>
                <Table
                  style={{ width: "400px", border: "1px solid black" }}
                  className="lab"
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th style={{ fontWeight: "bold" }}>Warp</th>
                      <th style={{ fontWeight: "bold" }}>Weft</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Min</td>
                      <td>-8.83</td>
                      <td>-8.83</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Max</td>
                      <td>-8.83</td>
                      <td>-8.83</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Diff</td>
                      <td>-8.83</td>
                      <td>-8.83</td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{ width: "500px", border: "1px solid black" }}
                  className="lab"
                >
                  <thead>
                    <th></th>
                    <th style={{ fontWeight: "bold" }}>Length</th>
                    <th style={{ fontWeight: "bold" }}>No of Codes</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>
                        Warp weft lessthan= (+/-3%)
                      </td>
                      <td>Dummy</td>
                      <td>Dummy</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>
                        Warp weft morethan (+/-3%)
                      </td>
                      <td>Dummy</td>
                      <td>Dummy</td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{ width: "400px", border: "1px solid black" }}
                  className="lab"
                >
                  <thead>
                    <th style={{ fontWeight: "bold" }}>Shade</th>
                    <th style={{ fontWeight: "bold" }}>Length</th>
                    <th style={{ fontWeight: "bold" }}>No of Codes</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A</td>
                      <td>11562</td>
                      <td>110</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>11562</td>
                      <td>110</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>11562</td>
                      <td>110</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Total</td>
                      <td style={{ fontWeight: "bold" }}>11562</td>
                      <td style={{ fontWeight: "bold" }}>110</td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{ width: "400px", border: "1px solid black" }}
                  className="lab"
                >
                  <thead>
                    <th></th>
                    <th style={{ fontWeight: "bold" }}>Length</th>
                    <th style={{ fontWeight: "bold" }}>No of rolls</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>CSV</td>
                      <td>Dummy</td>
                      <td>Dummy</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>RLD</td>
                      <td>Dummy</td>
                      <td>Dummy</td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{ width: "400px", border: "1px solid black" }}
                  className="lab"
                >
                  <thead>
                    <th></th>
                    <th style={{ fontWeight: "bold" }}>GSM</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>MIN</td>
                      <td>212</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Max</td>
                      <td>212</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Differenecce</td>
                      <td>212</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </td>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LaboratoryReport;
