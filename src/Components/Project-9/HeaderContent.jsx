import React, { useEffect, useRef, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Table } from "reactstrap";
import html2canvas from "html2canvas";
import { PDFDocument } from "pdf-lib";
// import "jspdf-autotable";

const HeaderContent = () => {
  const tableRef = useRef(null);
  const componentRef = useRef(null);
  const [tableWidth, setTableWidth] = useState(0);
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

  const headerData = [
    {
      Unit: {
        GSTNo: "33AAPCA6616G1ZO",
        PreparedBy: "Joe",
      },
      DocumentDetails: {
        DocNo: "ABF24GN01921",
        DocDate: "2024-12-11T11:12:00",
        DcNo: "17236",
        DcDate: "2024-12-10",
        GeNo: "GEAFB2400404",
        GeDate: "2024-12-11",
        Transporter: "TRIDENT",
        RcdDate: "2024-12-11",
        RefNo: "IND01192/24",
        InvoiceNo: "TGC240875",
        InvoiceDate: "2024-11-13",
        LFNo: "E240361",
        VehicleNo: "",
      },
      Supplier: {
        Name: "TUNG",
        Company: "TUNG GA LINEN & COTTON MILLS LTD.",
        Address:
          "UNIT 602, TOWER 3, PHASE 1, ENTERPRISE SQUARE, 9 SHEUNG YUET ROAD, KOWLOON BAY, HONG KONG",
      },
      GoodsDetails: {
        GoodsType: "FABRICS",
        GoodsInwardNote: true,
      },
    },
  ];

  const handlePDF = async () => {
    // Convert the div content to a canvas
    const canvas = await html2canvas(componentRef.current, {
      useCORS: true, // Necessary if image is from external source
      scale: 5,
    });

    // Convert the canvas to an image
    const imgData = canvas.toDataURL("image/png");

    // Proceed to create the PDF
    createA4Pdf(imgData);
  };
  const createA4Pdf = async (imgData) => {
    // A4 dimensions in points (portrait mode)
    const A4_WIDTH = 595.44; // 8.27 inches × 72 points
    const A4_HEIGHT = 841.68; // 11.69 inches × 72 points
    // Create a new PDF
    const pdfDoc = await PDFDocument.create();

    // Add a new A4-sized page
    const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);

    // Embed the image into the PDF
    const img = await pdfDoc.embedPng(imgData);
    console.log(img);
    // Original image dimensions
    const imgWidth = img.width;
    const imgHeight = img.height;

    // Calculate the scale factor to fit the image into A4 width
    const scale = Math.min(A4_WIDTH / imgWidth, A4_HEIGHT / imgHeight);

    const scaledWidth = imgWidth * scale;
    const scaledHeight = imgHeight * scale;

    // Position the image at the top of the page
    const x = (A4_WIDTH - scaledWidth) / 2; // Center horizontally
    const y = A4_HEIGHT - scaledHeight; // Top of the page

    // Draw the image onto the PDF page
    page.drawImage(img, {
      x,
      y,

      width: scaledWidth,
      height: scaledHeight,
    });

    // Save the PDF as bytes
    const pdfBytes = await pdfDoc.save();

    // Download the PDF
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "output-top.pdf";
    link.click();
  };
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
    <div>
      <div className=" flex justify-end my-3 mx-2">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
          excelStyle={{
            worksheet: {
              pageSetup: { orientation: "landscape" }, // Set landscape orientation
            },
          }}
        />
        <button
          className=" bg-gray-700 px-2 py-1 rounded-sm"
          onClick={handlePDF}
        >
          Download has PDF
        </button>
      </div>
      <div ref={componentRef} style={{ width: `${tableWidth}px` }}>
        <Table
          id="table-to-xls"
          style={{ border: "0.6px solid gray", borderCollapse: "collapse" }}
        >
          <thead>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th colSpan="13" className="content-bold-heading pdf-container">
                GIN DOCUMENT
              </th>
            </tr>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th
                colSpan="3"
                style={{
                  textAlign: "left",
                  paddingBottom: "40px",
                }}
                className="content-bold"
              >
                AMBATTUR FASHION INDIA PVT LTD
              </th>
              <th
                colSpan="2"
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Unit :
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                ></span>
              </th>
              <th
                colSpan="3"
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                GSTNo:
                <b className="content-normal" style={{ fontWeight: "normal" }}>
                  33AAPCA6616G1ZO
                </b>
              </th>
              <th
                colSpan="5"
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Prepared By:{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  Joe
                </span>
              </th>
            </tr>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th
                colSpan="3"
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Goods Inward Note -{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  FABRICS
                </span>
              </th>
              <th
                colSpan="5"
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Doc No : -{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  ABF24GN01921
                </span>
              </th>
              <th
                colSpan="5"
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Doc Date : -
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  11/12/2024 11:12
                </span>
              </th>
            </tr>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th
                colSpan={13}
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Dc No :
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  17236
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;Dc Date :{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  10/12/2024
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;Ge No :<span>GEAFB2400404</span>
                &nbsp;&nbsp;&nbsp;&nbsp;Ge Date :{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  11/12/2024
                </span>
              </th>
            </tr>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th
                colSpan={13}
                style={{
                  textAlign: "left",
                }}
                className="content-bold"
              >
                Transporter :
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  TRIDENT
                </span>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp; Rcd Date :
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  11/12/2024
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp; Ref No :
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  IND01192/24
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;Invoice No :{" "}
                <span className="content-normal">TGC240875</span>
                &nbsp;&nbsp;&nbsp;&nbsp;Invoice Date :
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  13/11/2024
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp; LFNo:{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  E240361
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;VehicleNo:
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                ></span>
              </th>
            </tr>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th
                colSpan={13}
                className="content-bold"
                style={{
                  textAlign: "left",
                }}
              >
                Supplier :{" "}
                <span
                  className="content-normal"
                  style={{ fontWeight: "normal" }}
                >
                  TUNG , TUNG GA LINEN & COTTON MILLS LTD.,UNIT 602, TOWER 3,
                  PHASE 1, ENTERPRISE SQUARE, , 9 SHEUNG YUET ROAD, KOWLOON BAY,
                  , HONG KONG.
                </span>{" "}
              </th>
            </tr>
            <tr
              style={{
                border: "0.6px solid gray",
              }}
            >
              <th
                colSpan={13}
                style={{
                  textAlign: "left",
                  paddingBottom: "40px",
                }}
                className="content-bold"
              >
                Remarks :
              </th>
            </tr>
            <tr>
              <th colSpan={13} className="p-0">
                <div ref={tableRef}>
                  <Table
                    bordered
                    className="m-0 table "
                    style={{
                      border: "0.6px solid gray",
                      borderCollapse: "collapse",
                    }}
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
                        <td
                          className=" text-[12px]"
                          style={{ fontWeight: "medium" }}
                        >
                          {TotalGinQty}
                        </td>
                        <td>{""}</td>
                        <td>{""}</td>
                        <td
                          className="text-[12px]"
                          style={{ fontWeight: "medium" }}
                        >
                          {TotalQC}
                        </td>
                        <td
                          className="text-[12px]"
                          style={{ fontWeight: "medium" }}
                        >
                          {TotalLabQty}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default HeaderContent;
