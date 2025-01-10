---
markmap:
  colorFreezeLevel: 2
---

# GIN

## header

### unit

- [unitmaster](vscode://file/C:/Users/muthukumaran/OneDrive%20-%20Garnet%20Technologies/Desktop/combined-Project/src/Components/Project-1/CreateProduct.jsx:10)

### Type

- [User item type Master](vscode://file/C:/Users/muthukumaran/OneDrive%20-%20Garnet%20Technologies/Desktop/combined-Project/src/Components/Project-1/CreateProductTable.jsx:19)

### Supplier

- [Supplier Master](vscode://file/C:/Users/muthukumaran/OneDrive%20-%20Garnet%20Technologies/Desktop/combined-Project/src/Components/Project-1/CreateProductTable.jsx:29)

### Gate Entry No

- Gate Entry Screen

### Doc Type

- In Codeing

### PoNo

- sourcing

### Inv No

- User Entry

### NO Packs

- User Entry

### Bin

- Bin Master

### Auto Qc

- Auto Qc Master

### Remarks

- User Entry

##  Inv Capture

###

- Received Inv Qty change fun()

- handleInputChangeInvCapture()

### ginQty

- parseFloat(
  value \* updatedData[index].conversionFactor
  ).toFixed(2);

### autoQc

- parseFloat(
  (value \* preGinHeaderCreateState.AutoQc) / 100
  ).toFixed(2);

### qcQty

- (
  value - parseFloat((value \* preGinHeaderCreateState.AutoQc) / 100)
  ).toFixed(2);

### Next Btn Click

- Using fun -- InvCaptureNext()

### API

- Gin/StyleAllocationList

## styleallocation

###

- Gin Qty Changes fun handleInputChangeStyleAllocation()

### autoQcQty

- `AutoQcPer === 100 ? value : (value \* AutoQcPer) / 100;`

### qcQty

- `AutoQcPer === 100 ? 0 : (value \* (100 - AutoQcPer)) / 100;`

### Save PreGin

#### API

- Gin/SaveGin

## gindetail
