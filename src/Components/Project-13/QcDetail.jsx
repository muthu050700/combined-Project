import { Table } from "reactstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import QcSummeryTable from "./QcSummeryTable";
import { data } from "react-router-dom";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
const QcDetail = () => {
  const qcReportData = [
    {
      ginNo: "GIN12345",
      companyName: "ABC Textiles Ltd.",
      unitNameAndAddressRow1: "Unit 12, Industrial Estate, City Center",
      addressRow2: "123 Main Street, Springfield, ZIP 54321",
      matImage: "dummy",
      supplier: "Supplier A",
      poNo: "PO98765",
      groupName: "Group 1",
      fabCategory: "Cotton",
      shipmentGrade: "Pass",
      inspectedDate: "2025-02-11",
      invNo: "INV123",
      matColor: "Blue",
      matSize: "L",
      matCode: "M456",
      qcDocNo: "QC2025-001",
      qcDocDate: "2025-02-11",
      printDateTime: "2025-02-11 11:00 AM",
      matDescription: "Cotton fabric",
      ginQty: 100,

      details: [
        {
          codeNo: "12345678910",
          inspectedDate: "11/02/2024",
          supplierRefNo: "123456789012",
          ginQty: 20,
          checkerName: "Kathick",
          recheck: "Y",
          startTime: "12/05/2024",
          endTime: "12/05/2024",
          actualQty: 1200,
          shortExcessQty: "dummy data",
          additionalChecks: {
            csv: "Checked",
            rld: "OK",
            swatch: "Good",
            splice: "None",
            bowing: "Minimal",
            seal: "Sealed",
            faceMark: "None",
          },
          defects: [
            {
              defectNo: 1,
              captureLength: 5,
              defectName: "Tear",
              defectType: "Fabric Damage",
              start: "10:00 AM",
              end: "10:30 AM",
              points: 2,
              widthPoint: 1.5,
              width: 30,
              actualQty: 98,
              shortExcessQty: -2,
            },
            {
              defectNo: 2,
              captureLength: 3,
              defectName: "Stitching Issue",
              defectType: "Misalignment",
              start: "11:00 AM",
              end: "11:20 AM",
              points: 1,
              widthPoint: 1.2,
              width: 28,
              actualQty: 99,
              shortExcessQty: -1,
            },
          ],
        },
        {
          codeNo: "12345678910",
          inspectedDate: "11/02/2024",
          supplierRefNo: "123456789012",
          ginQty: 20,
          checkerName: "Kathick",
          recheck: "Y",
          startTime: "12/05/2024",
          endTime: "12/05/2024",
          actualQty: 1200,
          shortExcessQty: "dummy data",
          additionalChecks: {
            csv: "Checked",
            rld: "OK",
            swatch: "Good",
            splice: "None",
            bowing: "Minimal",
            seal: "Sealed",
            faceMark: "None",
          },
          defects: [
            {
              defectNo: 1,
              captureLength: 5,
              defectName: "Tear",
              defectType: "Fabric Damage",
              start: "10:00 AM",
              end: "10:30 AM",
              points: 2,
              widthPoint: 1.5,
              width: 30,
              actualQty: 98,
              shortExcessQty: -2,
            },
            {
              defectNo: 2,
              captureLength: 3,
              defectName: "Stitching Issue",
              defectType: "Misalignment",
              start: "11:00 AM",
              end: "11:20 AM",
              points: 1,
              widthPoint: 1.2,
              width: 28,
              actualQty: 99,
              shortExcessQty: -1,
            },
          ],
        },
      ],

      remarks: "Overall good quality",
      inventory: {
        invNo: "INV123",
        matColor: "Blue",
        matSize: "L",
        matCode: "M456",
        matDescription: "Cotton fabric",
      },
      qcDetails: {
        docNo: "QC2025-001",
        docDate: "2025-02-11",
        printDateTime: "2025-02-11 11:00 AM",
      },
    },
  ];
  const generateExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Delivery Note");

    worksheet.headerFooter.oddHeader = "&C ISSUE TYPE - DELIVERY NOTE";
    worksheet.headerFooter.oddFooter = "&L Page";

    qcReportData.map((val) => {
      // Header
      const header1 = worksheet.addRow([
        `${val.companyName}\n ${val.unitNameAndAddressheader1}\n ${val.addressRow2}`, // Multi-line text
        "",
        "",
        "",
        "",
        "",
        "QC REPORT", // Centered QC Report
        "",
        "",
        "",
        "",
        "",
        "",
        "Mat Image",
        "",
        "",
        "",
        "QC Doc No\nQC Doc Date\nPrint Date & time", // Multi-line text
      ]);
      header1.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
      worksheet.mergeCells("A1:F1");
      worksheet.mergeCells("G1:M1");
      worksheet.mergeCells("N1:Q1");
      worksheet.mergeCells("R1:V1");

      worksheet.getRow(1).height = 40;

      header1.getCell(1).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };
      header1.getCell(7).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };
      header1.getCell(14).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };
      header1.getCell(18).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };

      const header2 = worksheet.addRow([
        `${val.ginNo}`,
        "",
        `${val.supplier}`,
        "",
        `${val.poNo}`,
        "",
        `${val.groupName}`,
        "",
        `${val.fabCategory}`,
        "",
        `Shipment Grade: ${val.shipmentGrade}`,
        "",
        `${val.invNo}`,
        "",
        `${val.matCode}`,
        "",
        `${val.matSize}`,
        "",
        `${val.matColor}`,
        "",
        `${val.matDescription}`,
      ]);
      header2.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
      worksheet.mergeCells("A2:B2");
      worksheet.mergeCells("C2:D2");
      worksheet.mergeCells("E2:F2");
      worksheet.mergeCells("G2:H2");
      worksheet.mergeCells("I2:J2");
      worksheet.mergeCells("K2:L2");
      worksheet.mergeCells("M2:N2");
      worksheet.mergeCells("O2:P2");
      worksheet.mergeCells("Q2:R2");
      worksheet.mergeCells("S2:T2");
      worksheet.mergeCells("U2:V2");
      const emptyRow1 = worksheet.addRow([""]);
      worksheet.mergeCells("A3:V3");
      emptyRow1.eachCell((cell) => {
        cell.border = {}; // Removes the border
      });

      val.details.forEach((dt, ind) => {
        const row1 = worksheet.rowCount + 1;

        worksheet.addRow([
          `Code No 1 : ${dt.codeNo}`,
          "",
          "",
          `Inspected date : ${dt.inspectedDate}`,
          "",
          "",
          `Supplier ref no : ${dt.supplierRefNo}`,
          "",
          "",
          `GIN Qty : ${dt.ginQty}`,
          "",
          "",
          `Checker name : ${dt.checkerName}`,
          "",
          "",
          `Recheck: ${dt.recheck}`,
        ]);

        // Merge every two adjacent columns (A:B, C:D, etc.)
        worksheet.mergeCells(`A${row1}:C${row1}`);
        worksheet.mergeCells(`D${row1}:F${row1}`);
        worksheet.mergeCells(`G${row1}:I${row1}`);
        worksheet.mergeCells(`J${row1}:L${row1}`);
        worksheet.mergeCells(`M${row1}:O${row1}`);
        worksheet.mergeCells(`P${row1}:U${row1}`);
        const row2 = worksheet.rowCount + 1;
        worksheet.addRow([
          `Start time : ${dt.startTime}`,
          "",
          "",
          `End time: ${dt.endTime}`,
          "",
          "",
          `Act Qty : ${dt.actualQty}`,
          "",
          "",
          `Short / Excess Qty : ${dt.shortExcessQty}`,
          "",
          "",
          "",
          `Remark: ${val.remarks}`,
        ]);
        worksheet.mergeCells(`A${row2}:C${row2}`);
        worksheet.mergeCells(`D${row2}:F${row2}`);
        worksheet.mergeCells(`G${row2}:I${row2}`);
        worksheet.mergeCells(`J${row2}:M${row2}`);
        worksheet.mergeCells(`N${row2}:U${row2}`);

        const row3 = worksheet.rowCount + 1;
        worksheet.addRow([
          `CSV : ${dt.additionalChecks.csv}`,
          "",
          "",
          `RLD : ${dt.additionalChecks.rld}`,
          "",
          "",
          `Swatch : ${dt.additionalChecks.swatch}`,
          "",
          "",
          `Splice : ${dt.additionalChecks.splice}`,
          "",
          "",
          `Bowing : ${dt.additionalChecks.bowing}`,
          "",
          "",
          `Seal : ${dt.additionalChecks.seal}`,
          "",
          "",
          `Face Mark : ${dt.additionalChecks.faceMark}`,
        ]);
        worksheet.mergeCells(`A${row3}:C${row3}`);
        worksheet.mergeCells(`D${row3}:F${row3}`);
        worksheet.mergeCells(`G${row3}:I${row3}`);
        worksheet.mergeCells(`J${row3}:L${row3}`);
        worksheet.mergeCells(`M${row3}:O${row3}`);
        worksheet.mergeCells(`P${row3}:R${row3}`);
        worksheet.mergeCells(`S${row3}:U${row3}`);
        const row4 = worksheet.rowCount + 1;
        const tableHeader = worksheet.addRow([
          "Capture Length",
          "",
          "",
          "Defect Name",
          "",
          "",
          "Def type",
          "",
          "",
          "Start",
          "",
          "",
          "End",
          "",
          "",
          "Points",
          "",
          "Width Point",
          "",
          "Width",
        ]);

        tableHeader.eachCell((cell) => {
          cell.font = { bold: true };
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
        worksheet.mergeCells(`A${row4}:C${row4}`);
        worksheet.mergeCells(`D${row4}:F${row4}`);
        worksheet.mergeCells(`G${row4}:I${row4}`);
        worksheet.mergeCells(`J${row4}:L${row4}`);
        worksheet.mergeCells(`M${row4}:O${row4}`);
        worksheet.mergeCells(`P${row4}:Q${row4}`);
        worksheet.mergeCells(`R${row4}:S${row4}`);

        dt.defects.forEach((tb) => {
          const row5 = worksheet.rowCount + 1;
          const tableRow = worksheet.addRow([
            `${tb.captureLength}`,
            "",
            "",
            `${tb.defectName}`,
            "",
            "",
            `${tb.defectType}`,
            "",
            "",
            `${tb.start}`,
            "",
            "",
            `${tb.end}`,
            "",
            "",
            `${tb.points}`,
            "",
            `${tb.widthPoint}`,
            "",

            `${tb.width}`,
          ]);
          tableRow.eachCell((cell) => {
            cell.border = {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            };
          });
          worksheet.mergeCells(`A${row5}:C${row5}`);
          worksheet.mergeCells(`D${row5}:F${row5}`);
          worksheet.mergeCells(`G${row5}:I${row5}`);
          worksheet.mergeCells(`J${row5}:L${row5}`);
          worksheet.mergeCells(`M${row5}:O${row5}`);
          worksheet.mergeCells(`P${row5}:Q${row5}`);
          worksheet.mergeCells(`R${row5}:S${row5}`);
        });

        const row6 = worksheet.rowCount + 1;
        worksheet.addRow([""]);
        worksheet.mergeCells(`A${row6}:U${row6}`);
      });
    });
    // Save file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "Delivery_Note.xlsx");
  };
  return (
    <>
      <button onClick={() => generateExcel()}>Download</button>

      {qcReportData.map((val, index) => {
        return (
          <Table
            id="table-to-xls"
            style={{ border: "0.6px solid gray", borderCollapse: "collapse" }}
            className=" w-full"
          >
            <thead>
              <tr>
                <th
                  colSpan={6}
                  style={{
                    textAlign: "center",
                    border: "0.6px solid gray",
                  }}
                  className="content-bold"
                >
                  Company Name
                  <br /> Unit Name & Address row 1 <br />
                  Address row 2
                </th>
                <th
                  style={{
                    textAlign: "center",
                    border: "0.6px solid gray",
                    paddingBottom: "40px",
                    padding: "0px",
                  }}
                  colSpan={7}
                >
                  QC REPORT
                </th>
                <th
                  style={{
                    textAlign: "center",
                    border: "0.6px solid gray",
                    padding: "0px",
                  }}
                  colSpan={4}
                >
                  Mat Image
                </th>

                <th
                  colSpan={1}
                  style={{
                    textAlign: "center",
                    border: "0.6px solid gray",
                  }}
                >
                  {val.qcDocNo} <br />
                  {val.qcDocDate}
                  <br />
                  {val.printDateTime}
                </th>
              </tr>
              <tr>
                <th colSpan={27} style={{ border: "none" }}></th>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={1}
                >
                  {val.ginNo}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={1}
                >
                  {val.supplier}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={1}
                >
                  {val.poNo}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={1}
                >
                  {val.groupName}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={1}
                >
                  {val.fabCategory}
                </td>
                <th
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={3}
                >
                  Shipment Grade:<span style={{ color: "green" }}>Pass</span>/
                  <span style={{ color: "red" }}>Fail</span>
                </th>

                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={2}
                >
                  {val.invNo}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={2}
                >
                  {val.matColor}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                    width: "100px",
                  }}
                  colSpan={2}
                >
                  {val.matSize}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={2}
                >
                  {val.matCode}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    border: "0.6px solid gray",
                  }}
                  colSpan={2}
                >
                  {val.matDescription}
                </td>
              </tr>
              <tr>
                <th colSpan={28}></th>
              </tr>

              {val.details.map((detail, index) => {
                return (
                  <>
                    <tr style={{ backgroundColor: "#E8F0FE" }}>
                      <th
                        style={{
                          textAlign: "left",
                          fontStyle: "normal",
                        }}
                        colSpan={3}
                      >
                        Code No {`${index + 1}`} :{" "}
                        <span style={{ fontWeight: "normal" }}>
                          12345678910
                        </span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Inspected date :{" "}
                        <span style={{ fontWeight: "normal" }}>
                          11/02/2524{" "}
                        </span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Supplier ref no :{" "}
                        <span style={{ fontWeight: "normal" }}>
                          123456789012
                        </span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        GIN Qty :{" "}
                        <span style={{ fontWeight: "normal" }}>20 </span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Checker name :{" "}
                        <span style={{ fontWeight: "normal" }}>Kathick</span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Recheck:<span style={{ fontWeight: "normal" }}> Y</span>
                      </th>
                    </tr>
                    <tr style={{ backgroundColor: "#E8F0FE" }}>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Start time :{" "}
                        <span style={{ fontWeight: "normal" }}>12/05/2024</span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        End time:
                        <span style={{ fontWeight: "normal" }}>12/05/2024</span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Act Qty :{" "}
                        <span style={{ fontWeight: "normal" }}>1200</span>
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Short / Excess Qty :
                        <span style={{ fontWeight: "normal" }}>dummy data</span>
                      </th>

                      <th style={{ textAlign: "left" }} colSpan={6}>
                        Remark: {val.remarks}
                      </th>
                    </tr>
                    <tr style={{ backgroundColor: "#E8F0FE" }}>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        CSV : {detail.additionalChecks.csv}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        RLD : {detail.additionalChecks.rld}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Swatch : {detail.additionalChecks.swatch}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={2}
                      >
                        Splice : {detail.additionalChecks.splice}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={2}
                      >
                        Bowing : {detail.additionalChecks.bowing}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        Seal : {detail.additionalChecks.seal}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                        colSpan={2}
                      >
                        Face Mark : {detail.additionalChecks.faceMark}
                      </th>
                    </tr>

                    <tr>
                      <th colSpan={19} className=" p-0">
                        <Table>
                          <thead>
                            <tr
                              style={{
                                textAlign: "left",
                                border: "0.6px solid gray",
                                fontStyle: "normal",
                              }}
                            >
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                Capture Length{" "}
                              </th>
                              <th
                                colSpan={4}
                                style={{ border: "1px solid gray" }}
                              >
                                Defect Name
                              </th>
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                Def type
                              </th>
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                Start
                              </th>
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                End
                              </th>
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                Points
                              </th>
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                Width Point{" "}
                              </th>
                              <th
                                colSpan={2}
                                style={{ border: "1px solid gray" }}
                              >
                                Width{" "}
                              </th>
                            </tr>
                            {detail.defects.map((data, index) => {
                              return (
                                <>
                                  <tr
                                    style={{
                                      textAlign: "left",
                                      border: "0.6px solid  gray",
                                      fontStyle: "normal",
                                    }}
                                  >
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.captureLength}
                                    </th>

                                    <th
                                      colSpan={4}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.defectName}
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.defectType}
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.start}
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.end}
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.points}
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.widthPoint}
                                    </th>
                                    <th
                                      colSpan={2}
                                      style={{ border: "1px solid gray" }}
                                    >
                                      {data.width}
                                    </th>
                                  </tr>
                                </>
                              );
                            })}

                            <tr
                              style={{
                                textAlign: "left",
                                border: "0.6px solid gray",
                                fontStyle: "normal",
                              }}
                            ></tr>
                            <tr>
                              <th colSpan={19} style={{ border: "none" }}></th>
                            </tr>
                          </thead>
                        </Table>
                      </th>
                    </tr>
                  </>
                );
              })}
            </thead>
          </Table>
        );
      })}
    </>
  );
};

export default QcDetail;
