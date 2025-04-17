import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import QcSummeryTable from "./QcSummeryTable";
import { sum } from "pdf-lib";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const QcSummery = () => {
  const [totalDefects, setTotalDefects] = useState(0);
  const [defectsData, setDefectsData] = useState([]);
  const [totals, setTotals] = useState([]);
  const sums = defectsData.reduce((acc, val) => {
    Object.keys(val).forEach((key) => {
      const numValue = parseInt(val[key], 10);
      if (!isNaN(numValue)) {
        if (!acc[key]) {
          acc[key] = 0;
        }

        acc[key] += numValue;
      }
    });
    return acc;
  }, []);
  const qcReportData2 = [
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
  console.log(defectsData, sums);
  const summeryTotal = Object.values(sums).reduce((sum, num) => {
    return Number(num) + sum;
  }, 0);
  console.log(totalDefects);
  const qcReportData1 = [
    {
      headerDetails: {
        companyName: "ABC Textiles Ltd.",
        unitNameAndAddressRow1: "Unit 12, Industrial Estate, City Center",
        addressRow2: "123 Main Street, Springfield, ZIP 54321",
        matImage: "dummy",
        ginNo: "GIN12345",
        supplier: "Karthick",
        poNo: "8735847657415",
        groupName: "Ware House",
        fabCategory: "dummy",
        shipmentGrade: "Pass",
        invNo: "1876378162",
        matColor: "Blue",
        matSize: "14",
        matCode: "782221",
        matDescrition: "dummy",
      },
      tableDetails: [
        {
          codeNo: "GIN12345",
          inspectedDate: "2025-01-22",
          SupplierRefNo: "Supplier A",
          actQty: 500,
          ginQty: 450,
          actWidth: 42,
          point1: 100,
          point2: 200,
          point3: 150,
          point4: 200,
          checkerName: "Muthu",
          checkerM: "Grade A",
          remarks: "All materials inspected and verified.",
          recheck: "N",
          defects: {
            "Defect %": "20%",
            "Def 1/Point": "Knt/4",
            "Def 2/Point": "Stains/3",
            "Def 3/Point": "Wrinkles/4",
            "Def 4/Point": "Tears/4",
            "Def 5/Point": "Knt/3",
          },
        },
        {
          codeNo: "GIN128845",
          inspectedDate: "2025-01-22",
          SupplierRefNo: "Supplier A",
          actQty: 500,
          ginQty: 450,
          actWidth: 42,
          point1: 100,
          point2: 200,
          point3: 150,
          point4: 200,
          checkerName: "Muthu",
          checkerM: "Grade A",
          remarks: "All materials inspected and verified.",
          recheck: "N",
          defects: {
            "Defect %": "20%",
            "Def 1/Point": "Knt/4",
            "Def 2/Point": "Stains/3",
            "Def 3/Point": "Wrinkles/4",
            "Def 5/Point": "Holes/2",
            "Def 5/Point": "Tears/3",
          },
        },
        {
          codeNo: "GIN128845",
          inspectedDate: "2025-01-22",
          SupplierRefNo: "Supplier A",
          actQty: 500,
          ginQty: 450,
          actWidth: 42,
          point1: 100,
          point2: 200,
          point3: 150,
          point4: 200,
          checkerName: "Muthu",
          checkerM: "Grade A",
          remarks: "All materials inspected and verified.",
          recheck: "N",
          defects: {
            "Defect %": "20%",
            "Def 1/Point": "Knt/4",
            "Def 2/Point": "Stains/3",
            "Def 3/Point": "Wrinkles/4",
            "Def 4/Point": "Holes/3",
          },
        },
        {
          codeNo: "GIN128845",
          inspectedDate: "2025-01-22",
          SupplierRefNo: "Supplier A",
          actQty: 500,
          ginQty: 450,
          actWidth: 42,
          point1: 100,
          point2: 200,
          point3: 150,
          point4: 200,
          checkerName: "Muthu",
          checkerM: "Grade A",
          remarks: "All materials inspected and verified.",
          recheck: "N",
          defects: {
            "Defect %": "20%",
            "Def 1/Point": "Knt/4",
            "Def 2/Point": "Stains/3",
            "Def 3/Point": "Wrinkles/4",
            "Def 4/Point": "Holes/3",
            "Def 5/Point": "Holes/2",
            "Def 6/Point": "Holes/4",
            "Def 7/Point": "Holes/4",
            "Def 8/Point": "Holes/4",
          },
        },
      ],
      fabricUsageData: [
        {
          styleOrderNo: "Style1/35689",
          majPanels: 5,
          markerYY: 2.5,
          yyUOM: "Mts",
          noOfCodes: 20,
          ginQty: 2000,
          ginUOM: "Mts",
          tFalloutPercent: "8.44%",
          fFalloutPercent: "6.88%",
          pcsWithoutFallout: 800,
          pcsWithFallout: 745,
          orderQty: 1000,
          fabFallout: 137.5,
        },
        {
          styleOrderNo: "Style1/35689",
          majPanels: 5,
          markerYY: 2.5,
          yyUOM: "Mts",
          noOfCodes: 20,
          ginQty: 2000,
          ginUOM: "Mts",
          tFalloutPercent: "8.44%",
          fFalloutPercent: "6.88%",
          pcsWithoutFallout: 800,
          pcsWithFallout: 745,
          orderQty: 1000,
          fabFallout: 137.5,
        },
        {
          styleOrderNo: "Style2/35690",
          majPanels: 5,
          markerYY: 2,
          yyUOM: "Mts",
          noOfCodes: 12,
          ginQty: 1200,
          ginUOM: "yds",
          tFalloutPercent: "6.17%",
          fFalloutPercent: "5.03%",
          pcsWithoutFallout: 656,
          pcsWithFallout: 623,
          orderQty: 1200,
          fabFallout: 66,
        },
        {
          styleOrderNo: "Style3/35691",
          majPanels: 6,
          markerYY: 1.5,
          yyUOM: "Mts",
          noOfCodes: 8,
          ginQty: 800,
          ginUOM: "Mts",
          tFalloutPercent: "6.08%",
          fFalloutPercent: "4.95%",
          pcsWithoutFallout: 533,
          pcsWithFallout: 507,
          orderQty: 3000,
          fabFallout: 39,
        },
      ],
    },
  ];
  const generateExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet1 = workbook.addWorksheet("Delivery Note");
    // footer current date and time
    const currentDate = new Date().toLocaleString();

    sheet1.headerFooter.oddFooter = `Document Generated By iTHRED On ${String(
      currentDate
    )} By ${"dummy"}.`;

    qcReportData1.map((val) => {
      // Header
      const row1 = sheet1.addRow([
        `${val.headerDetails.companyName}\n ${val.headerDetails.unitNameAndAddressRow1}\n ${val.headerDetails.addressRow2}`, // Multi-line text
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
      row1.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      // Merging cells to structure the layout
      sheet1.mergeCells("A1:F1");
      sheet1.mergeCells("G1:M1");
      sheet1.mergeCells("N1:Q1");
      sheet1.mergeCells("R1:V1");
      // Setting row height for better visibility
      sheet1.getRow(1).height = 40;
      // Applying alignment & text wrapping for merged cells
      row1.getCell(1).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };
      row1.getCell(7).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };
      row1.getCell(14).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };
      row1.getCell(18).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };

      const row2 = sheet1.addRow([
        `${val.headerDetails.ginNo}`,
        "",
        `${val.headerDetails.supplier}`,
        "",
        `${val.headerDetails.poNo}`,
        "",
        `${val.headerDetails.groupName}`,
        "",
        `${val.headerDetails.fabCategory}`,
        "",
        `Shipment Grade: ${val.headerDetails.shipmentGrade}`,
        "",
        `${val.headerDetails.invNo}`,
        "",
        `${val.headerDetails.matCode}`,
        "",
        `${val.headerDetails.matSize}`,
        "",
        `${val.headerDetails.matColor}`,
        "",
        `${val.headerDetails.matDescrition}`,
        "",
      ]);
      sheet1.mergeCells("A2:B2");
      sheet1.mergeCells("C2:D2");
      sheet1.mergeCells("E2:F2");
      sheet1.mergeCells("G2:H2");
      sheet1.mergeCells("I2:J2");
      sheet1.mergeCells("K2:L2");
      sheet1.mergeCells("M2:N2");
      sheet1.mergeCells("O2:P2");
      sheet1.mergeCells("Q2:R2");
      sheet1.mergeCells("S2:T2");
      sheet1.mergeCells("U2:V2");
      row2.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
      const emptyRow1 = sheet1.addRow([""]);
      sheet1.mergeCells("A3:V3");
      emptyRow1.eachCell((cell) => {
        cell.border = {}; // Removes the border
      });
      const headerRow = sheet1.addRow([
        "Code No",
        "Inspected date",
        "Supplier ref no",
        "GIN Qty",
        "Act Qty",
        "Act width",
        "Total points",
        "Point 1",
        "Point 2",
        "Point 3",
        "Point 4",
        "Defect %",
        ...[...Array(totalDefects)].map((_, index) => {
          if (index + 1 < totalDefects) {
            return `Def ${index + 1}/Point)`;
          } else return "Grade";
        }),
        "Checker Name",
        "Checker Remark",
        "Recheck",
      ]);

      sheet1.columns = [
        { header: "Code No", width: 15 },
        { header: "Inspected date", width: 15 },
        { header: "Supplier ref no", width: 15 },
        { header: "GIN Qty", width: 10 },
        { header: "Act Qty", width: 10 },
        { header: "Act width", width: 10 },
        { header: "Total points", width: 15 },
        { header: "Point 1", width: 10 },
        { header: "Point 2", width: 10 },
        { header: "Point 3", width: 10 },
        { header: "Point 4", width: 10 },
        { header: "Defect %", width: 12 },
        ...Array(totalDefects).fill({ width: 13 }), // Defects columns
        { header: "Checker Name", width: 15 },
        { header: "Checker Remark", width: 25 },
        { header: "Recheck", width: 10 },
      ];

      // Apply bold style to each cell in the header row
      headerRow.eachCell((cell) => {
        cell.font = { bold: true };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      // Optional: Set row height for better visibility
      headerRow.height = 25;

      val.tableDetails.map((tableDt) => {
        const remainingCount =
          totalDefects - Object.values(tableDt.defects).length;

        const exceedItems = Array.from(
          { length: remainingCount },
          (_, i) => ""
        );

        const defectsData = Object.values(tableDt.defects);

        const finalDefectsData = [...defectsData, ...exceedItems];
        console.log(finalDefectsData, val.tableDetails.length);
        const tableData = [
          [
            `${tableDt.codeNo}`,
            `${tableDt.inspectedDate}`,
            `${tableDt.SupplierRefNo}`,
            Number(`${tableDt.ginQty}`),
            Number(`${tableDt.actQty}`),
            Number(`${tableDt.actWidth}`),
            `${"dummy"}`,
            Number(`${tableDt.point1}`),
            Number(`${tableDt.point2}`),
            Number(`${tableDt.point3}`),
            Number(`${tableDt.point4}`),

            ...finalDefectsData,
            `${tableDt.checkerM}`,
            `${tableDt.checkerName}`,
            `${tableDt.remarks}`,
            `${tableDt.recheck}`,
          ],
        ];

        tableData.forEach((row) => {
          const tableRow = sheet1.addRow(row);
          tableRow.getCell(4).alignment = { horizontal: "right" };
          tableRow.getCell(5).alignment = { horizontal: "right" };
          tableRow.getCell(6).alignment = { horizontal: "right" };
          tableRow.getCell(7).alignment = { horizontal: "right" };
          tableRow.getCell(8).alignment = { horizontal: "right" };
          tableRow.getCell(9).alignment = { horizontal: "right" };
          tableRow.getCell(10).alignment = { horizontal: "right" };
          tableRow.getCell(11).alignment = { horizontal: "right" };
          tableRow.eachCell((cell) => {
            cell.border = {
              top: { style: "thin" },
              left: { style: "thin" },
              bottom: { style: "thin" },
              right: { style: "thin" },
            };
          });
        });
      });
      const tableTotal = sheet1.addRow([
        "Total",
        "",
        "",
        "sum",
        "avg",
        "sum",
        "sum",
        "sum",
        "sum",
        "sum",
        "same formula but against total",
        "% from total",
        "sum",
        "sum",
      ]);
      tableTotal.getCell(4).alignment = {
        horizontal: "right",
      };
      tableTotal.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
      sheet1.addRow([""]);
      sheet1.mergeCells(
        `A${5 + val.tableDetails.length + 1}:V${
          5 + val.tableDetails.length + 1
        }`
      );
      const defectHeader = sheet1.addRow([
        "Defect Name/ Code",
        ...Object.keys(sums).map((val) => val),
        "Total",
        "",
        "Gin Qty",
        "Unchecked",
        "Grade 1",
        "Grade 2",
        "Reject",
        "T.Fallout %",
        "f. Fallout %",
        "Mendable Panels & %",
        "Non mendable Panels & %",
        "",
        "Total Points",
        "Total Accepted  points",
        "Total QC Qty",
        "Short",
        "Excess",
        "width diff",
      ]);

      defectHeader.eachCell((cell) => {
        if (cell.value === "") {
          return;
        }

        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
        cell.font = { bold: true };
      });

      const totalPoints = sheet1.addRow([
        "Total Points",
        ...Object.values(sums).map((val) => val),
        Number(`${summeryTotal}`),
        "",
        "dummy",
        "dummy",
        "dummy",
        "dummy",
        "dummy",
        "5.04%",
        "3.2%",
        "112 & 1.87",
        "190 & 3.17",
        "",
        "27",
        "22",
        "1500",
        "",
        "",
        "",
      ]);
      totalPoints.eachCell((cell) => {
        if (cell.value === "") {
          return;
        }

        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      totalPoints.getCell(
        Number(`${1 + Object.values(sums).length + 1}`)
      ).alignment = {
        horizontal: "right",
      };
      const def = sheet1.addRow([
        "Def %",
        ...Object.values(sums).map(
          (val) => `${Math.round((val / summeryTotal) * 100)}%`
        ),
        "",
      ]);

      def.eachCell((cell) => {
        if (cell.value === "") {
          return;
        }

        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      def.getCell(Number(2)).alignment = {
        horizontal: "right",
      };
      def.getCell(Number(3)).alignment = {
        horizontal: "right",
      };
      def.getCell(Number(4)).alignment = {
        horizontal: "right",
      };
      def.getCell(Number(5)).alignment = {
        horizontal: "right",
      };
      def.getCell(Number(6)).alignment = {
        horizontal: "right",
      };
      sheet1.addRow([""]);
      sheet1.mergeCells(
        `A${9 + val.tableDetails.length + 1}:B${
          9 + val.tableDetails.length + 1
        }`
      );
      sheet1.mergeCells(
        `C${9 + val.tableDetails.length + 1}:V${
          9 + val.tableDetails.length + 1
        }`
      );

      const styleHeader = sheet1.addRow(
        ...[Object.keys(val.fabricUsageData[0])]
      );

      styleHeader.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      val.fabricUsageData.forEach((obj) => {
        const styleRow = sheet1.addRow(Object.values(obj));

        styleRow.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
      });

      const fabricUsageDataTotal = sheet1.addRow([
        "load styles under the inv for the mat code/color/size",
        "entry on top fills for all",
        "",
        "",
        "40",
        "4000",
        "",
        "20.69%",
        "",
        "1989",
        "1875",
        "",
        "242.5",
      ]);

      fabricUsageDataTotal.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      // const styleRow2 = sheet1.addRow([
      //   "load styles under the inv for the mat code/color/size",
      //   "",
      //   "",
      //   "",
      //   "40",
      //   "4000",
      //   "",
      //   "20.69%",
      //   "",
      //   "1989",
      //   "1875",
      //   "",
      //   "242.5",
      // ]);

      // styleRow2.eachCell((cell) => {
      //   cell.border = {
      //     top: { style: "thin" },
      //     left: { style: "thin" },
      //     bottom: { style: "thin" },
      //     right: { style: "thin" },
      //   };
      // });

      sheet1.addRow([""]);
      sheet1.mergeCells(
        `A${12 + val.tableDetails.length + val.fabricUsageData.length + 1}:B${
          12 + val.tableDetails.length + val.fabricUsageData.length + 1
        }`
      );
      sheet1.mergeCells(
        `C${12 + val.tableDetails.length + val.fabricUsageData.length + 1}:V${
          12 + val.tableDetails.length + val.fabricUsageData.length + 1
        }`
      );

      const remarks = sheet1.addRow(["Remarks", "", "value"]);
      remarks.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
      sheet1.mergeCells(
        `A${13 + val.tableDetails.length + val.fabricUsageData.length + 1}:B${
          13 + val.tableDetails.length + val.fabricUsageData.length + 1
        }`
      );
      sheet1.mergeCells(
        `C${13 + val.tableDetails.length + val.fabricUsageData.length + 1}:V${
          13 + val.tableDetails.length + val.fabricUsageData.length + 1
        }`
      );
      remarks.getCell(1).font = { bold: true };
      sheet1.eachRow((row, rowNumber) => {
        // List of rows to exclude from border styling
        const rowsToExclude = [
          3,
          5 + val.tableDetails.length + 1,
          9 + val.tableDetails.length + 1,
          13 + val.tableDetails.length + 1,
        ];

        // if (!rowsToExclude.includes(rowNumber)) {
        //   row.eachCell((cell, colNumber) => {
        //     // Skip applying the border for the empty cell before "Gin Qty"
        //     if (cell.value === "") {
        //       return;
        //     }

        //     cell.border = {
        //       top: { style: "thin" },
        //       left: { style: "thin" },
        //       bottom: { style: "thin" },
        //       right: { style: "thin" },
        //     };
        //   });
        // } else {
        //   row.eachCell((cell) => {
        //     cell.border = {}; // Remove borders for specified rows
        //   });
        // }
      });
    });

    const sheet2 = workbook.addWorksheet("QC Detail");

    sheet2.headerFooter.oddHeader = "&C ISSUE TYPE - DELIVERY NOTE";
    sheet2.headerFooter.oddFooter = "&L Page";

    qcReportData2.map((val) => {
      // Header
      const header1 = sheet2.addRow([
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
      sheet2.mergeCells("A1:F1");
      sheet2.mergeCells("G1:M1");
      sheet2.mergeCells("N1:Q1");
      sheet2.mergeCells("R1:V1");

      sheet2.getRow(1).height = 40;

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

      const header2 = sheet2.addRow([
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
      sheet2.mergeCells("A2:B2");
      sheet2.mergeCells("C2:D2");
      sheet2.mergeCells("E2:F2");
      sheet2.mergeCells("G2:H2");
      sheet2.mergeCells("I2:J2");
      sheet2.mergeCells("K2:L2");
      sheet2.mergeCells("M2:N2");
      sheet2.mergeCells("O2:P2");
      sheet2.mergeCells("Q2:R2");
      sheet2.mergeCells("S2:T2");
      sheet2.mergeCells("U2:V2");
      const emptyRow1 = sheet2.addRow([""]);
      sheet2.mergeCells("A3:V3");
      emptyRow1.eachCell((cell) => {
        cell.border = {}; // Removes the border
      });

      val.details.forEach((dt, ind) => {
        const row1 = sheet2.rowCount + 1;

        sheet2.addRow([
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
        sheet2.mergeCells(`A${row1}:C${row1}`);
        sheet2.mergeCells(`D${row1}:F${row1}`);
        sheet2.mergeCells(`G${row1}:I${row1}`);
        sheet2.mergeCells(`J${row1}:L${row1}`);
        sheet2.mergeCells(`M${row1}:O${row1}`);
        sheet2.mergeCells(`P${row1}:U${row1}`);
        const row2 = sheet2.rowCount + 1;
        sheet2.addRow([
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
        sheet2.mergeCells(`A${row2}:C${row2}`);
        sheet2.mergeCells(`D${row2}:F${row2}`);
        sheet2.mergeCells(`G${row2}:I${row2}`);
        sheet2.mergeCells(`J${row2}:M${row2}`);
        sheet2.mergeCells(`N${row2}:U${row2}`);

        const row3 = sheet2.rowCount + 1;
        sheet2.addRow([
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
        sheet2.mergeCells(`A${row3}:C${row3}`);
        sheet2.mergeCells(`D${row3}:F${row3}`);
        sheet2.mergeCells(`G${row3}:I${row3}`);
        sheet2.mergeCells(`J${row3}:L${row3}`);
        sheet2.mergeCells(`M${row3}:O${row3}`);
        sheet2.mergeCells(`P${row3}:R${row3}`);
        sheet2.mergeCells(`S${row3}:U${row3}`);
        const row4 = sheet2.rowCount + 1;
        const tableHeader = sheet2.addRow([
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
        sheet2.mergeCells(`A${row4}:C${row4}`);
        sheet2.mergeCells(`D${row4}:F${row4}`);
        sheet2.mergeCells(`G${row4}:I${row4}`);
        sheet2.mergeCells(`J${row4}:L${row4}`);
        sheet2.mergeCells(`M${row4}:O${row4}`);
        sheet2.mergeCells(`P${row4}:Q${row4}`);
        sheet2.mergeCells(`R${row4}:S${row4}`);

        dt.defects.forEach((tb) => {
          const row5 = sheet2.rowCount + 1;
          const tableRow = sheet2.addRow([
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
          sheet2.mergeCells(`A${row5}:C${row5}`);
          sheet2.mergeCells(`D${row5}:F${row5}`);
          sheet2.mergeCells(`G${row5}:I${row5}`);
          sheet2.mergeCells(`J${row5}:L${row5}`);
          sheet2.mergeCells(`M${row5}:O${row5}`);
          sheet2.mergeCells(`P${row5}:Q${row5}`);
          sheet2.mergeCells(`R${row5}:S${row5}`);
        });

        const row6 = sheet2.rowCount + 1;
        sheet2.addRow([""]);
        sheet2.mergeCells(`A${row6}:U${row6}`);
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
        style={{
          border: "0.6px solid gray",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          {qcReportData1.map((val) => {
            const {
              companyName,
              unitNameAndAddressRow1,
              addressRow2,
              matImage,
              supplier,
              poNo,
              groupName,
              fabCategory,
              shipmentGrade,
              ginNo,
              invNo,
              matColor,
              matSize,
              matCode,
              matDescrition,
            } = val.headerDetails;
            return (
              <>
                <Table style={{ tableLayout: "fixed" }}>
                  <thead>
                    <tr>
                      <th
                        colSpan={6}
                        style={{
                          textAlign: "center",
                          border: "0.6px solid gray",
                          width: "600px",
                        }}
                        className="content-bold"
                      >
                        {companyName}
                        <br /> {unitNameAndAddressRow1} <br />
                        {addressRow2}
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          border: "0.6px solid gray",
                          paddingBottom: "40px",
                          width: "500px",
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
                          width: "500px",
                        }}
                        colSpan={4}
                      >
                        {matImage}
                      </th>

                      <th
                        colSpan={1}
                        style={{
                          textAlign: "center",
                          border: "0.6px solid gray",
                        }}
                      >
                        QC Doc No <br />
                        QC Doc Date
                        <br />
                        Print Date & time
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={15 + totalDefects}
                        style={{ border: "none" }}
                      ></th>
                    </tr>
                    <Table style={{ tableLayout: "fixed" }}>
                      <thead>
                        <tr>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {ginNo}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {supplier}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {poNo}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {""}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {groupName}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {fabCategory}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "300px ",
                            }}
                            colSpan={3}
                          >
                            Shipment Grade:
                            <span
                              style={
                                shipmentGrade === "Pass"
                                  ? { color: "green" }
                                  : { color: "red" }
                              }
                            >
                              {shipmentGrade}
                            </span>
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {""}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {""}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {""}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "none",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {""}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {invNo}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {matColor}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {matSize}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {matCode}
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              border: "0.6px solid gray",
                              width: "150px ",
                            }}
                            colSpan={1}
                          >
                            {matDescrition}
                          </th>
                        </tr>
                        <tr>
                          <th colSpan={15 + totalDefects}></th>
                        </tr>
                      </thead>
                    </Table>
                  </thead>
                </Table>

                <tr>
                  <th colSpan={15 + totalDefects}>
                    <QcSummeryTable
                      tableDetails={val.tableDetails}
                      totalDefects={totalDefects}
                      setTotalDefects={setTotalDefects}
                      setDefectsData={setDefectsData}
                    />
                  </th>
                </tr>
                <Table>
                  <thead>
                    <tr>
                      <th colSpan={15 + totalDefects}></th>
                    </tr>
                    <tr>
                      <th colSpan={8}>
                        <Table
                          style={{
                            border: "0.6px solid gray",
                            borderCollapse: "collapse",
                            tableLayout: "fixed",
                          }}
                          className=" w-[fit]"
                        >
                          <thead>
                            <tr>
                              <th
                                colSpan={1}
                                style={{
                                  textAlign: "center",
                                  border: "0.6px solid gray",
                                }}
                              >
                                Defect Name/ Code
                              </th>
                              {Object.keys(sums).map((val) => {
                                return (
                                  <th
                                    style={{
                                      textAlign: "center",
                                      border: "0.6px solid gray",
                                    }}
                                  >
                                    {val}
                                  </th>
                                );
                              })}
                              <th
                                style={{
                                  textAlign: "center",
                                  border: "0.6px solid gray",
                                }}
                              >
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th
                                colSpan={1}
                                style={{
                                  textAlign: "center",
                                  border: "0.6px solid gray",
                                }}
                              >
                                Total Points
                              </th>
                              {Object.values(sums).map((val) => {
                                return (
                                  <td
                                    style={{
                                      textAlign: "center",
                                      border: "0.6px solid gray",
                                    }}
                                  >
                                    {val}
                                  </td>
                                );
                              })}

                              <td
                                style={{
                                  textAlign: "center",
                                  border: "0.6px solid gray",
                                }}
                              >
                                {summeryTotal}
                              </td>
                            </tr>

                            <tr>
                              <th
                                colSpan={1}
                                style={{
                                  textAlign: "center",
                                  border: "0.6px solid gray",
                                }}
                              >
                                Def%
                              </th>
                              {Object.values(sums).map((val) => {
                                return (
                                  <td
                                    style={{
                                      textAlign: "center",
                                      border: "0.6px solid gray",
                                    }}
                                  >
                                    {Math.round((val / summeryTotal) * 100)}%
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </Table>
                      </th>
                    </tr>

                    <tr>
                      <th colSpan={28}>{""}</th>
                    </tr>
                    <tr>
                      <th
                        style={{
                          textAlign: "left",
                          border: "0.6px solid gray",
                        }}
                        colSpan={28}
                      >
                        Remarks:
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={28}>{""}</th>
                    </tr>
                  </thead>
                </Table>
              </>
            );
          })}
        </thead>
      </Table>
    </>
  );
};

export default QcSummery;
