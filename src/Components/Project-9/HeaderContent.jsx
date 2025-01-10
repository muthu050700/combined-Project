import React, { useEffect, useRef, useState } from "react";
import GinTable from "./GinTable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Table } from "reactstrap";
import html2canvas from "html2canvas";
import { PDFDocument } from "pdf-lib";
import "jspdf-autotable";

const HeaderContent = () => {
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

  return (
    <div>
      <div ref={componentRef} style={{ width: `${tableWidth}px` }}>
        <Table id="table-to-xls" className="custom-table table ">
          <thead>
            <tr>
              <th colSpan="13" className="content-bold-heading pdf-container">
                GIN DOCUMENT
              </th>
            </tr>
            <tr>
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
            <tr>
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
                colSpan="4"
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
            <tr>
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
            <tr>
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
            <tr>
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
            <tr>
              <th colSpan={13} className="content-bold">
                Remarks :
              </th>
            </tr>
            <tr>
              <th colSpan={13} className="p-0">
                <GinTable setTableWidth={setTableWidth} />
              </th>
            </tr>
          </thead>
        </Table>
      </div>

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
      <button className=" bg-gray-700 px-2 py-1 rounded-sm" onClick={handlePDF}>
        Download has PDF
      </button>
    </div>
  );
};

export default HeaderContent;
