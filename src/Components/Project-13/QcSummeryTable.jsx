import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

const QcSummeryTable = ({
  tableDetails,
  totalDefects,
  setTotalDefects,
  setDefectsData,
}) => {
  useEffect(() => {
    calculateTotalDefects();
  }, [tableDetails]);

  useEffect(() => {
    const defects = tableDetails.map((detail) => {
      return Object.values(detail.defects); // Accessing the values of defects object
    });

    const combined = defects.flat(); // Flatten the array of arrays

    // Split each defect into an object like { knt: '3' }
    const transformedDefects = combined.map((item) => {
      if (item.includes("/")) {
        const [defect, number] = item.split("/"); // Split by '/'
        return { [defect.toLowerCase()]: number }; // Create object with defect as key and number as value
      }
      return {}; // If no '/' found, return empty object (could handle differently if needed)
    });

    // Flatten the transformed array and remove any empty objects
    const flattenedDefects = transformedDefects.filter(
      (item) => Object.keys(item).length > 0
    );
    console.log(flattenedDefects);
    // const uniqueDefects = flattenedDefects.reduce((acc, current) => {
    //   const key = Object.keys(current)[0]; // Get the key (defect type)
    //   const value = current[key]; // Get the associated value (number)

    //   // Check if this defect already exists in the accumulator, with the same value
    //   const existingDefect = acc.find((item) => item[key] === value);

    //   if (!existingDefect) {
    //     acc.push(current); // Add the new defect if it doesn't exist
    //   }

    //   return acc;
    // }, []);

    setDefectsData((prevData) => {
      if (JSON.stringify(prevData) !== JSON.stringify(flattenedDefects)) {
        return flattenedDefects;
      }
      return prevData;
    });
  }, [tableDetails]);

  const calculateTotalDefects = () => {
    tableDetails.map((defectsData) => {
      const noOfDefects = Object.keys(defectsData.defects).length;
      if (noOfDefects > totalDefects) {
        setTotalDefects(noOfDefects);
      }
    });
  };

  const defects = (data) => {
    const remainingCount = totalDefects - Object.values(data.defects).length;

    const exceedItems = Array.from({ length: remainingCount }, (_, i) => "");

    const defectsData = Object.values(data.defects);

    const finalDefectsData = [...defectsData, ...exceedItems];

    return finalDefectsData.map((val, index) => {
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
    });
  };

  return (
    <div>
      <Table
        style={{
          border: "0.6px solid gray",
          borderCollapse: "collapse ",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Code No
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Inspected date
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Supplier ref no
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              GIN Qty
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Act Qty
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Act width
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Total points
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              point1
            </th>{" "}
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              point2
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              point3
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              point4
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Defect %
            </th>
            {[...Array(totalDefects)].map((_, index) => {
              return (
                index + 1 < totalDefects && (
                  <>
                    <th
                      key={index}
                      style={{
                        textAlign: "center",
                        border: "0.6px solid gray",
                        width: "150px",
                      }}
                      colSpan={1}
                    >
                      {`Def ${index + 1}/Point`}
                    </th>
                  </>
                )
              );
            })}
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Grade
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              checker Name
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "200px",
              }}
              colSpan={1}
            >
              checker remark
            </th>
            <th
              style={{
                textAlign: "center",
                border: "0.6px solid gray",
                width: "150px",
              }}
              colSpan={1}
            >
              Recheck
            </th>
          </tr>
        </thead>
        <tbody>
          {tableDetails.map((data, index) => {
            const {
              codeNo,
              inspectedDate,
              SupplierRefNo,
              ginQty,
              actQty,
              actWidth,
              point1,
              point2,
              point3,
              point4,
            } = data;
            return (
              <>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {codeNo}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {inspectedDate}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {SupplierRefNo}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {ginQty}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {actQty}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {actWidth}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {codeNo}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {point1}
                  </td>

                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {point2}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {point3}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {point4}
                  </td>
                  {defects(data)}
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {data.checkerM}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {data.checkerName}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {data.remarks}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      border: "0.6px solid gray",
                    }}
                    colSpan={1}
                  >
                    {data.recheck}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
        <tr>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={3}
          >
            Total
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            totalGinQty
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            avg
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            same formula but against total
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            % from total
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
          <th
            style={{
              textAlign: "center",
              border: "0.6px solid gray",
            }}
            colSpan={1}
          >
            sum
          </th>
        </tr>
      </Table>
    </div>
  );
};

export default QcSummeryTable;
