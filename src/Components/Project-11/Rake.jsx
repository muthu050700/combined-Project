import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";
import { Button } from "reactstrap";

const Rake = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@page {
      size: 62mm 50mm portrait;
      margin: 0mm;
    }`,
  });
  return (
    <>
      <div
        className=" flex gap-3 items-center w-[62mm] h-[50mm] border border-black justify-center"
        ref={componentRef}
      >
        <div className="row-span-3 d-flex ">
          <QRCode value="AR24A0004589-139.52" size={100} />
        </div>
        <h3>NM01</h3>
      </div>{" "}
      <div>
        <Button color="secondary" onClick={handlePrint}>
          Print
        </Button>
      </div>
    </>
  );
};

export default Rake;
