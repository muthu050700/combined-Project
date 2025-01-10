const PrintComponent = ({ handlePrint }) => {
  return (
    <div>
      <button
        onClick={handlePrint}
        className="bg-sky-700 px-2 py-1 rounded-sm font-medium text-white mx-2"
      >
        Print
      </button>
    </div>
  );
};

export default PrintComponent;
