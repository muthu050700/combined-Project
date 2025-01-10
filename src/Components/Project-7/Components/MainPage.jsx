import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import PrintComponent from "./PrintComponent";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const MainPage = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
    @page { 
    size: 172.3mm 76.2mm portrait;
    margin: 0;
    }
    body {
      margin: 0;
    }
    .print-box {
      width:  172.3mm; 
      height: 76.2mm; 
      border: 1px solid black;
      disply: flex;
      justify-content:
    }
    .photo-container {
      width:  172.3mm; 
      height: 76.2mm;
    }
    `,
  });
  // const exportToPdf = () => {
  //   const input = componentRef.current;

  //   html2canvas(input).then((canvas1) => {
  //     const imgData1 = canvas1.toDataURL("image/png");
  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "mm",
  //       format: [101.6, 76.2],
  //     });
  //     pdf.addImage(imgData1, "PNG", 0, 0);
  //     pdf.addPage([101.6, 76.2]);
  //     html2canvas(input).then((canvas2) => {
  //       const imgData2 = canvas2.toDataURL("image/png");
  //       pdf.addImage(imgData2, "PNG", 0, 0);
  //       pdf.save("custom-size.pdf");
  //     });
  //   });
  // };
  return (
    <>
      <div ref={componentRef}>
        <div
          style={{
            width: "101.6mm",
            height: "76.2mm",
          }}
          className="print-box photo-container"
        >
          <div className="flex flex-col justify-center items-center ">
            <p className=" pt-[1mm] pb-[2mm] font-medium">
              AR24A0004589-139.52
            </p>
            <Barcode
              value={`AR24A0004589`}
              displayValue={false}
              width={2.3}
              height={30}
              margin={0}
            />
          </div>
          <div className="flex justify-center ">
            <div className=" grid grid-cols-2 gap-x-5 w-[360px] h-[150px]">
              <p className=" font-medium text-[15px]">Supplier : ARVID</p>
              <p className=" font-medium text-[15px]">Inv No : SDI2402403</p>
              <p className=" font-bold pb-1 text-[15px]">PO NO : IF000124535</p>
              <p className=" font-bold pb-1 text-[15px] ">
                Color : Midnight Navy
              </p>
              <p className=" font-medium text-[15px]">Size :</p>
              <p className=" text-center font-medium text-[15px]">
                Codes/GIN :
              </p>
              <p className=" my-1 font-medium text-[15px]">Mat Code :</p>
              <p className=" text-center font-medium text-[15px]">
                Open Date :
              </p>
              <p className="font-medium text-[15px]">Supp No :</p>
              <div className=" row-span-3 flex  justify-center ">
                <QRCode value="muthu" size={90} />
              </div>
              <p className="font-medium text-[15px]">Buyer Div :</p>
              <p className="font-medium text-[15px]">Order No/Wash :</p>
              <p className="font-medium text-[15px]">Desc :</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div ref={componentRef}>
        <pre>
          {`<xpml><page quantity='0' pitch='76.2 mm'></xpml>^XA
^SZ2^JMA
^MCY^PMN
^PW814
~JSN
^JZY
^LH0,0^LRN
^XZ
<xpml></page></xpml><xpml><page quantity='0' pitch='76.2 mm'>
</xpml><xpml></page></xpml><xpml><page quantity='1' pitch='76.2 mm'></xpml>^XA
^FO523,340
^BQN,2,8^FDLA,12345678^FS
^FT20,158
^CI0
^A0N,20,27^FDSupplier: ARVID^FS
^FT432,204
^A0N,20,27^FDPO NO : IF000124535^FS
^FT20,501
^A0N,28,38^FDSize : 12345678910^FS
^FT20,259
^A0N,20,28^FDM Code : 123456789101234567890^FS
^FT20,209
^A0N,20,27^FDSupp No :^FS
^FT20,314
^A0N,25,34^FDBuyer Div :^FS
^FT20,374
^A0N,25,34^FDOrderNo/Wash :^FS
^FT20,566
^A0N,28,38^FDDesc :^FS
^FT20,438
^A0N,28,38^FDColor : MidnightNavy^FS
^FT432,255
^A0N,20,27^FDCodes/GIN : 123456^FS
^FT428,303
^A0N,20,27^FDOpen Date : 24-12-19^FS
^FO11,55
^BY5^BAN,52,N,Y,N^FDAR24A004589^FS
^FT210,39
^A0N,34,46^FDAR24A004589 - 139.52^FS
^FT432,153
^A0N,20,27^FDInv No : SDI2402403^FS
^PQ1,0,1,Y
^XZ
<xpml></page></xpml><xpml><end/></xpml>`}
        </pre>
      </div> */}
      <PrintComponent handlePrint={handlePrint} />
    </>
  );
};

export default MainPage;
