import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";

import { Button, ButtonGroup, Form, Label, Input, Table } from "reactstrap";
const BarCode = () => {
  const componentRef = useRef(null);
  const [base64String, setBase64String] = useState("");
  const [zplCode, setZplCode] = useState("");
  const [noOfCopies, setNoOfCopies] = useState(1);
  const [results, setResults] = useState([]);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const zplCodeData = [
    {
      buyduv: "GOMWT",
      orderno: "41948",
      style: "732010-D61751-SP25",
      itemlist: [
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
      ],
    },
    {
      buyduv: "GOMWT",
      orderno: "41948",
      style: "732010-D61751-SP25",
      itemlist: [
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
      ],
    },
    {
      buyduv: "MUTHU",
      orderno: "12345",
      style: "SDHGFHS-JHGADHA",
      itemlist: [
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
      ],
    },
    {
      buyduv: "Ajay",
      orderno: "87675",
      style: "SDHGFHS-JHGADHA-gfhg",
      itemlist: [
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
        {
          code: "PMSTACSHSKU12JJ",
          color: "NGTSHDWBLUEMLT/4522",
          size: "SPR25/10/24",
          quantity: "130 Nos",
        },
      ],
    },
  ];

  const generateZPLRows = (data) => {
    const gap = 40;
    let rowHeight = 0;
    let cumulativeHeight = 270;

    const rows = data
      .map((obj, objIndex) => {
        const header = `
  ${
    objIndex > 0 &&
    `^FO227,${20 + rowHeight}
^GB321,0,6^FS
^FO0,${70 + rowHeight}
^GB818,0,3^FS
^FO0,${125 + rowHeight}
^GB818,0,3^FS`
  }
^FT4,${objIndex > 0 ? 60 + rowHeight : 174}
^A0N,34,46^FD${obj.buyduv} / ${obj.orderno} / ${obj.style}^FS
^FT0,${objIndex > 0 ? 107 + rowHeight : 218}
^A0N,25,34^FDMat Code^FS
^FT247,${objIndex > 0 ? 107 + rowHeight : 219}
^A0N,25,34^FDMat Color^FS
^FT548,${objIndex > 0 ? 107 + rowHeight : 219}
^A0N,25,38^FDSize^FS
^FT690,${objIndex > 0 ? 107 + rowHeight : 219}
^A0N,25,31^FDQty/UOM^FS
        `;
        const items = obj.itemlist
          .map((val, index) => {
            rowHeight =
              objIndex > 0
                ? index * gap + cumulativeHeight + 115
                : index * gap + cumulativeHeight;
            return `
            ^FT0,${rowHeight}
            ^A0N,23,28^FD${val.code}^FS
            ^FT239,${rowHeight}
            ^A0N,23,28^FD${val.color}^FS
            ^FT539,${rowHeight}
            ^A0N,23,29^FD${val.size}^FS
            ^FT705,${rowHeight}
            ^A0N,23,29^FD${val.quantity}^FS
            `;
          })
          .join("");
        cumulativeHeight = rowHeight + gap;
        return header + items;
      })
      .join("");

    return { rows, finalRowHeight: rowHeight };
  };
  const { rows, finalRowHeight } = generateZPLRows(zplCodeData);
  console.log(finalRowHeight);

  const footer = () => {
    const footerStart = 59 + finalRowHeight;

    return `
^FO227,${20 + finalRowHeight}
^GB321,0,6^FS
^FT146,${footerStart}
^A0N,31,42^FDSupplier :^FS
^FT179,${footerStart + 35}
^A0N,31,42^FDInv No :^FS
^FT173,${footerStart + 70}
^A0N,31,42^FDGin No :^FS
^FT211,${footerStart + 105}
^A0N,31,42^FDDate :^FS
^FT330,${footerStart}
^A0N,23,28^FDTFE INTERNATIONAL LTD^FS
^FT330,${footerStart + 35}
^A0N,23,28^FDCRTR2413098^FS
^FT330,${footerStart + 70}
^A0N,23,28^FDE24030066^FS
^FT329,${footerStart + 105}
^A0N,23,20^FD10-01-2025^FS  
      `;
  };

  const generateZPLCode = () => {
    return `<xpml><page quantity='0' pitch='119.5 mm'></xpml>^XA
^SZ2^JMA
^MCY^PMN
^PW833
^MNN^LL${finalRowHeight + 164 + 15.118110236}
~JSN
~SD25^MD0
~!G0
^JZY
^LH0,0^LRN
^XZ
<xpml></page></xpml><xpml><page quantity='0' pitch='119.5 mm'>
</xpml><xpml></page></xpml><xpml><page quantity='1' pitch='119.5 mm'></xpml>^XA
^FO5,${35 + finalRowHeight}
^BQN,2,6^FDLA,12345678^FS
^FO56,25
^BY5^BAN,60,N,N,N^FD24000001260^FS
^FO0,183
^GB815,0,3^FS
^FO0,238
^GB815,0,3^FS
^FT117,130
^CI0
^A0N,45,71^FDARAN24000001260^FS
${rows}
${footer()}
^PQ1,0,1,Y
^XZ
<xpml></page></xpml><xpml><end/></xpml>`;
  };

  const convertToBase64 = () => {
    const base64 = btoa(generateZPLCode());
    setBase64String(base64);
  };
  console.log(base64String);
  const convertToZPL = () => {
    const decodedZPL = atob(base64String);
    setZplCode(decodedZPL);
  };
  console.log(zplCode);

  const handleNoOfCopies = (e) => {
    if (e.target.value >= 1 || e.target.value === "") {
      setNoOfCopies(e.target.value);
    } else if (Number(e.target.value) === 0) {
      alert("Enter a valid number");
    }
  };

  useEffect(() => {
    handleCallFunction();
  }, [noOfCopies]);
  const handleCallFunction = () => {
    const functionResults = [];
    for (let i = 0; i < noOfCopies; i++) {
      const result = generateZPLCode();
      functionResults.push(result);
    }
    setResults(functionResults);
  };

  return (
    <>
      <div className="border rounded bg-light p-3 mx-3">
        <Form>
          <div className="d-flex flex-wrap gap-3 mb-1">
            <div className="d-flex  flex-1 gap-2">
              <Label for="printerName" className="font-weight-medium">
                Printer Name:
              </Label>
              <span className="mb-0 text-muted">Citizen CL-E321Z</span>
            </div>
            <div className="d-flex  flex-1 gap-2">
              <Label for="ipAddress" className="font-weight-medium">
                IP Address:
              </Label>
              <span className="mb-0 text-muted">192.168.1.100</span>
            </div>
            <div className="d-flex flex-1 gap-2">
              <Label for="portNo" className="font-weight-medium">
                Port No:
              </Label>
              <span className="mb-0 text-muted">9100</span>
            </div>
            <div className="d-flex flex-1 gap-2">
              <Label for="extensionId" className="font-weight-medium">
                Extension ID:
              </Label>
              <span className="mb-0 text-muted">CL-E321Z-001</span>
            </div>
            <div className="d-flex flex-1 gap-2">
              <Label for="printerId" className="font-weight-medium">
                Printer ID:
              </Label>
              <span className="mb-0 text-muted">PRINTER-321Z</span>
            </div>
            <div className="d-flex align-items-center gap-2 flex-1">
              <Label for="printerType" className="font-weight-medium">
                Printer Type<span className="text-danger">*</span>
              </Label>
              <ButtonGroup>
                <Button color="primary" outline>
                  Local
                </Button>
                <Button color="primary" outline>
                  Network
                </Button>
                <Button color="primary" outline>
                  Cloud
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 justify-content-end ">
            <div className="d-flex align-items-center gap-2 flex-1 mb-0">
              <Label for="noOfCopies" className="mb-0">
                No of copies
              </Label>
              <Input
                type="number"
                id="noOfCopies"
                value={noOfCopies}
                className="w-auto"
                onChange={handleNoOfCopies}
              />
            </div>
            <Button color="primary" onClick={handlePrint}>
              Print
            </Button>
          </div>
        </Form>
      </div>
      <div style={{ width: "101.6mm" }}>
        <div>
          <div className="d-flex flex-column align-items-center pb-2">
            <Barcode
              value={`AR24A0004589`}
              displayValue={false}
              width={2.3}
              height={25}
              margin={0}
            />
            <p className="fw-bold" style={{ fontSize: "25px" }}>
              AR24A0004589-139.52
            </p>
          </div>
          <div>
            {zplCodeData.map((obj, objIndex) => {
              return (
                <>
                  <h2
                    className="fw-bold text-center"
                    style={{ fontSize: "18px" }}
                  >
                    {obj.buyduv} / {obj.orderno} / {obj.style}
                  </h2>
                  <div className="mb-2">
                    <Table className="m-0">
                      <thead>
                        <tr
                          className="fw-bold border-top border-black"
                          style={{ fontSize: "10px" }}
                        >
                          <th>Mat Code</th>
                          <th>Mat Color</th>
                          <th>Size</th>
                          <th>Qty/UOM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {obj.itemlist.map((val, index) => {
                          return (
                            <tr
                              className="fw-bold"
                              style={{ fontSize: "10px" }}
                            >
                              <td className=" border-0 p-1 ">{val.code}</td>
                              <td className=" border-0 p-1">{val.color}</td>
                              <td className=" border-0 p-1">{val.size}</td>
                              <td className=" border-0 p-1">{val.quantity}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center mb-1">
                    <div
                      style={{
                        height: "3px",
                        backgroundColor: "black",
                        width: "200px",
                      }}
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex align-items-center gap-4">
            <div className="row-span-3 d-flex">
              <QRCode value="AR24A0004589-139.52" size={70} />
            </div>
            <div
              className="d-flex flex-column align-items-center"
              style={{ fontSize: "12px" }}
            >
              <p className="font-weight-bold">
                Supplier : The International ltd
              </p>
              <p className="font-weight-bold">Inv No:CRTR2413098</p>
              <p className="font-weight-bold">Gin No : E2403006</p>
              <p className="font-weight-bold">Date : 10-01-2025</p>
            </div>
          </div>
        </div>
        <div className="d-none">
          <div ref={componentRef}>
            <pre>{results}</pre>
          </div>
        </div>

        <div>
          <Button
            className=" bg-gray-700 px-2 py-1 rounded-sm"
            onClick={convertToBase64}
          >
            Conver to base 64
          </Button>
        </div>
        <div>
          <Button
            className=" bg-gray-700 px-2 py-1 rounded-sm"
            onClick={convertToZPL}
          >
            Conver to zpl
          </Button>
        </div>
        <div>
          <Button color="secondary" onClick={handlePrint}>
            Print
          </Button>
        </div>
      </div>
    </>
  );
};

export default BarCode;
