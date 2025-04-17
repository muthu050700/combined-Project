import React, { useEffect } from "react";
import { Table } from "reactstrap";
import IssueTable from "./IssueTable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
const IssueDocument = () => {
  const issueData = [
    {
      header: {
        companyName: "AMBATTUR FASHION INDIA PVT LTD",
        issueType: "DELIVERY NOTE",
        GSTNo: "33AAPCA6616G1ZO",
        docNo: "ART24LT05734",
        docDate: "08/01/2025",
        issueTostyleNo: "333",
        documentTakenOn: "08/01/2025 12:17",
        valueOfGoods: 2564.0,
        remarks: "ISSUE TO LINE S3",
        ValueOfGoodsRs: "2564.00",
        remarks: "ISSUE TO LINE S3",
        indentNo: "2",
        poNo: "123",
        invoiceNo: "123456",
        transType: "sea",
        transDocNo: "1234",
        remark: "hii",
      },
      issueFrom: {
        name: "AMBATTUR FASHION INDIA PVT LTD, BIN-",
        address1: "B-9 INDUSTRIAL ESTATE",
        address2: " AMBATTUR, CHENNAI - 58",
        contactDetails: "651805/28.2.95 - 33671321251 - U93090TN1995PTC034577",
      },
      issueTo: {
        name: "AMBATTUR FASHION INDIA PVT LTD, BIN/Line-",
        address1: "D15-2, AMB INDUSTRIAL ESTATE",
        address2: " AMBATTUR, CHENNAI - 600 058",
        contactDetails: "33671321251",
        reference: "651805 DT 28/02/95 067",
      },
      items: [
        {
          barCode: "THPOLTKA08050GU",
          itemDesc: "POLY CORE SPUN THREAD TEX040/5000M/CONE/715573/A080",
          color: "0473",
          size: "TEX-040",
          hsCode: "772507",
          styleOrderNo: "D62858-SP25 CHASE - 41896",
          uom: "CON",
          cv_ncv: "CV",
          unchecked: 100.0,
          grade1: 4.0,
          grade2: 0.0,
          rejected: 0.0,
          buyer: "BRMW",
        },
        {
          barCode: "THPOLTKA10050GU",
          itemDesc: "POLY CORE SPUN THREAD TEX030/5000M/CONE/715557/A100",
          color: "0473",
          size: "TEX-030",
          hsCode: "772507",
          styleOrderNo: "D62858-SP25 CHASE - 41896",
          uom: "CON",
          cv_ncv: "NCV",
          unchecked: 0.0,
          grade1: 7.0,
          grade2: 0.0,
          rejected: 0.0,
          buyer: "BRMW",
        },
        {
          barCode: "THPOLTKA10050GU",
          itemDesc: "POLY CORE SPUN THREAD TEX030/5000M/CONE/715557/A100",
          color: "0473",
          size: "TEX-030",
          hsCode: "772507",
          styleOrderNo: "D62858-SP25 CHASE - 41896",
          uom: "CON",
          cv_ncv: "NCV",
          unchecked: 0.0,
          grade1: 7.0,
          grade2: 0.0,
          rejected: 0.0,
          buyer: "BRMW",
        },
      ],
      totals: {
        unchecked: 100.0,
        grade1: 11.0,
        grade2: 0.0,
        rejected: 0.0,
      },
    },
  ];
  const totalRej = issueData[0].items.reduce(
    (sum, val) => sum + val.rejected,
    0
  );
  const Grade2 = issueData[0].items.reduce((sum, val) => sum + val.grade2, 0);
  const Grade1 = issueData[0].items.reduce((sum, val) => sum + val.grade1, 0);
  const totalUnchecked = issueData[0].items.reduce(
    (sum, val) => sum + val.unchecked,
    0
  );

  const generateExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Delivery Note");

    worksheet.headerFooter.oddHeader = "&C ISSUE TYPE - DELIVERY NOTE";
    worksheet.headerFooter.oddFooter = "&L Page";
    issueData.map((val, index) => {
      // Header
      worksheet.mergeCells("A1:N1");
      worksheet.getCell("A1").value = "ISSUE TYPE - DELIVERY NOTE";
      worksheet.getCell("A1").font = { bold: true, size: 14 };
      worksheet.getCell("A1").alignment = { horizontal: "center" };
      worksheet.addRow([
        "AMBATTUR FASHION INDIA PVT LTD",
        "",
        "",
        "",
        `GST No: ${val.header.GSTNo}`,
        "",
        "",
        "",
        `Documnet Taken No: ${val.header.documentTakenOn} `,
      ]);

      worksheet.mergeCells("A2:D2");
      worksheet.mergeCells("E2:H2");
      worksheet.mergeCells("I2:N2");

      worksheet.mergeCells("A3:N3");
      worksheet.getCell("A3").value = `Issue Type: ${val.header.issueType}`;

      // Document Details
      worksheet.addRow([
        `Doc No: ${val.header.docNo}`,
        "",
        `Doc Date: ${val.header.docDate}`,
        "",
        "(Purchase Return) -PO No",
        "",
        "",
        `Issue To style No: ${val.header.issueTostyleNo}`,
        "",
        "",
        "",
        `Indent No: ${val.header.indentNo}`,
      ]);
      worksheet.mergeCells("A4:B4");
      worksheet.mergeCells("C4:D4");
      worksheet.mergeCells("E4:G4");
      worksheet.mergeCells("H4:K4");
      worksheet.mergeCells("L4:N4");
      worksheet.addRow(["Issue From", "", "", "", "", "", "", "Issue To"]);
      worksheet.mergeCells("A5:G5");
      worksheet.mergeCells("H5:N5");
      worksheet.addRow([
        `${val.issueTo.name}`,
        "",
        "",
        "",
        "",
        "",
        "",
        `${val.issueFrom.name}`,
      ]);
      worksheet.mergeCells("A6:G6");
      worksheet.mergeCells("H6:N6");
      worksheet.addRow([
        `${val.issueTo.address1}`,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        `${val.issueFrom.address1}`,
      ]);
      worksheet.mergeCells("A7:G7");
      worksheet.mergeCells("H7:N7");
      worksheet.addRow([
        `${val.issueTo.address2}`,
        "",
        "",
        "",
        "",
        "",
        "",
        `${val.issueFrom.address2}`,
      ]);
      worksheet.mergeCells("A8:G8");
      worksheet.mergeCells("H8:N8");
      worksheet.addRow([
        `${val.issueTo.contactDetails}`,
        "",
        "",
        "",
        "",
        "",
        "",
        `${val.issueFrom.contactDetails}`,
      ]);
      worksheet.mergeCells("A9:G9");
      worksheet.mergeCells("H9:N9");

      worksheet.addRow([
        "(Sale/Po return)Value Of Goods Rs.:2564(Approx)",
        "",
        "",
        "",
        "",
        `PoNo: ${val.header.poNo}`,
        "",
        "",
        `InvoiceNo: ${val.header.invoiceNo}`,
      ]);
      worksheet.mergeCells("A10:E10");
      worksheet.mergeCells("F10:H10");
      worksheet.mergeCells("I10:N10");

      worksheet.addRow([
        `Trans Type: ${val.header.transType}`,
        "",
        "",
        "",
        "",
        "",
        "",
        `Trans Doc No: ${val.header.transDocNo}`,
      ]);
      worksheet.mergeCells("A11:G11");
      worksheet.mergeCells("H11:N11");
      worksheet.mergeCells("A12:N12");
      worksheet.getCell("A12").value = `Remarks: ${val.header.remarks}`;

      // Table Headers
      const headerRow = worksheet.addRow([
        "SI No",
        "Bar Code",
        "Item Desc",
        "Color",
        "Size",
        "HsCode",
        "Style/Order No",
        "UOM",
        "CV/NCV",
        "Unchecked",
        "Grade 1",
        "Grade 2",
        "Rej",
        "Buyer",
      ]);
      headerRow.font = { bold: true };
      // Table Data
      const data = [...val.items];

      data.forEach((obj, index) => {
        const ind = [index + 1];
        const data = Object.values(obj);
        const row = worksheet.addRow([...ind, ...data]);
        row.getCell(1).alignment = { horizontal: "left" };
      });

      const total = worksheet.addRow([
        "Total",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        `${totalUnchecked}`,
        `${Grade1}`,
        `${Grade2}`,
        `${totalRej}`,
        "",
      ]);
      total.getCell(10).alignment = { horizontal: "right" };
      total.getCell(11).alignment = { horizontal: "right" };
      total.getCell(12).alignment = { horizontal: "right" };
      total.getCell(13).alignment = { horizontal: "right" };
      // Apply Borders to All Cells
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
    });

    // Save file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "Delivery_Note.xlsx");
  };

  return (
    <>
      {/* <div className=" flex justify-end">
        <ReactHTMLTableToExcel
          id="export-to-excel-button"
          className="download-button bg-slate-500 text-white px-2 py-1 rounded-sm my-5 mx-3"
          table="table-to-xls"
          filename="table-data"
          sheet="sheet1"
          buttonText="Download as Excel"
        />
      </div> */}
      <button onClick={() => generateExcel()}>Download</button>
      <Table
        id="table-to-xls"
        style={{ border: "0.6px solid gray", borderCollapse: "collapse" }}
      >
        <thead>
          {issueData.map((val) => {
            return (
              <>
                <tr>
                  <th
                    colSpan="14"
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                      paddingBottom: "40px",
                    }}
                    className="content-bold"
                  >
                    ISSUE TYPE - {val.header.issueType}
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="4.6"
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                  >
                    {val.header.companyName}
                  </th>
                  <th
                    colSpan="4.6"
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                  >
                    GST No:{" "}
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      {val.header.GSTNo}
                    </span>
                  </th>
                  <th
                    colSpan="6"
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                  >
                    Documnet Taken No:{" "}
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      {val.header.documentTakenOn}
                    </span>
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="14"
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                  >
                    Issue Type:
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                  >
                    Doc No:{" "}
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      {val.header.docNo}
                    </span>
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="2"
                  >
                    Doc Date:{" "}
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      {val.header.docDate}
                    </span>
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="3"
                  >
                    (Purchase Return) -PO No
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="3"
                  >
                    Issue To style No:{" "}
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      12345689
                    </span>
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="5"
                  >
                    Indent No:{" "}
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      12345689
                    </span>
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="5"
                  >
                    Issue From
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="9"
                  >
                    Issue To
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="5"
                  >
                    {val.issueFrom.name}
                  </th>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="9"
                  >
                    {val.issueTo.name}
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="5"
                  >
                    {val.issueFrom.address1}
                  </th>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="9"
                  >
                    {val.issueTo.address1}
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="5"
                  >
                    {val.issueFrom.address2}
                  </th>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="9"
                  >
                    {val.issueTo.address2}
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="5"
                  >
                    {val.issueFrom.contactDetails}
                  </th>
                  <th
                    style={{
                      fontWeight: "normal",
                      textAlign: "left",
                      border: "0.6px solid gray",
                    }}
                    colSpan="9"
                  >
                    {val.issueTo.contactDetails}
                  </th>
                </tr>
                <tr>
                  <th
                    colSpan="4.6"
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                  >
                    (Sale/Po return)Value Of Goods Rs.:{val.header.valueOfGoods}
                    (Approx)
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "40px",
                      border: "0.6px solid gray",
                    }}
                    className="content-bold"
                    colSpan="4.6"
                  >
                    PoNo:
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      border: "0.6px solid gray",
                      paddingBottom: "40px",
                    }}
                    className="content-bold"
                    colSpan="4.6"
                  >
                    InvoiceNo:
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      border: "0.6px solid gray",
                      paddingBottom: "40px",
                    }}
                    className="content-bold"
                    colSpan="7"
                  >
                    Trans Type:
                  </th>
                  <th
                    style={{
                      border: "0.6px solid gray",
                      textAlign: "left",
                      paddingBottom: "40px",
                    }}
                    className="content-bold"
                    colSpan="7"
                  >
                    Trans Doc No:
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      border: "0.6px solid gray",
                      paddingBottom: "40px",
                    }}
                    className="content-bold"
                    colSpan="14"
                  >
                    Remarks:
                    <span
                      className="content-normal"
                      style={{ fontWeight: "normal" }}
                    >
                      {val.header.remarks}
                    </span>
                  </th>
                </tr>
                <tr>
                  <th colSpan={14} className="p-0">
                    <Table
                      style={{
                        border: "0.6px solid gray",
                        borderCollapse: "collapse",
                        borderBottom: "none",
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={{ border: "0.6px solid gray" }}>SI No</th>
                          <th style={{ border: "0.6px solid gray" }}>
                            Bar Code
                          </th>
                          <th style={{ border: "0.6px solid gray" }}>
                            Item Desc
                          </th>
                          <th style={{ border: "0.6px solid gray" }}>Color</th>
                          <th style={{ border: "0.6px solid gray" }}>Size</th>
                          <th style={{ border: "0.6px solid gray" }}>HsCode</th>
                          <th style={{ border: "0.6px solid gray" }}>
                            Style/Order No
                          </th>
                          <th style={{ border: "0.6px solid gray" }}>UOM</th>
                          <th style={{ border: "0.6px solid gray" }}>CV/NCV</th>
                          <th style={{ border: "0.6px solid gray" }}>
                            Unchecked
                          </th>
                          <th style={{ border: "0.6px solid gray" }}>
                            Grade 1
                          </th>
                          <th style={{ border: "0.6px solid gray" }}>
                            Grade 2
                          </th>
                          <th style={{ border: "0.6px solid gray" }}>Rej</th>
                          <th style={{ border: "0.6px solid gray" }}>Buyer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {val.items.map((val, index) => {
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
                                <td style={{ border: "0.6px solid gray" }}>
                                  {index + 1}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.barCode}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.itemDesc}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.color}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.size}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.hsCode}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.styleOrderNo}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.uom}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.cv_ncv}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.unchecked}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.grade1}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.grade2}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.rejected}
                                </td>
                                <td style={{ border: "0.6px solid gray" }}>
                                  {val.buyer}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                        <tr>
                          <td
                            style={{ border: "0.6px solid gray" }}
                            colSpan="9"
                          >
                            Total
                          </td>

                          <td style={{ border: "0.6px solid gray" }}>
                            {totalUnchecked}
                          </td>
                          <td style={{ border: "0.6px solid gray" }}>
                            {Grade1}
                          </td>
                          <td style={{ border: "0.6px solid gray" }}>
                            {Grade2}
                          </td>
                          <td style={{ border: "0.6px solid gray" }}>
                            {totalRej}
                          </td>
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
                  </th>
                </tr>
                <tr className=" border-none no-border">
                  <td colSpan="7">Generated From WareHouse Reports</td>
                  <td colSpan="7">Admin</td>
                </tr>
                <tr className=" border-none no-border">
                  <td colSpan="14"></td>
                </tr>
                <tr className=" border-none no-border">
                  <td colSpan="14"></td>
                </tr>
                <tr className=" border-none no-border">
                  <td
                    style={{
                      textAlign: "center",
                      paddingBottom: "40px",
                    }}
                    colSpan="14"
                  >
                    System Generated Signature Not Required
                  </td>
                </tr>
              </>
            );
          })}
        </thead>
      </Table>
    </>
  );
};

export default IssueDocument;
