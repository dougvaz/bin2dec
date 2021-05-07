import React, { useState } from "react";
import "./ConvertBinary.scss";

const ConvertBinary = () => {
  const [numberValue, setNumberValue] = useState(
    "Hi, type 0 or 1 to convert to decimal!"
  );

  const parseBinaryToDecimal = (strArray) => {
    if (strArray.length === 0) {
      return "Hi, type 0 or 1 to convert to decimal!";
    }

    let sum = 0;

    for (let index = 0; index < strArray.length; index++) {
      if (strArray[index] !== "1" && strArray[index] !== "0") {
        return "Error, please type only 0 or 1!";
      }

      sum += strArray[index] === "1" ? Math.pow(2, index) : 0;
    }

    return `Decimal number: ${sum}`;
  };

  const handlerBinaryValue = (event) => {
    let strArray = event.target.value.split("").reverse();

    const numberValue = parseBinaryToDecimal(strArray);

    setNumberValue(numberValue);
  };

  return (
    <div className="container">
      <div className="child">
        <h1>Bin2Dec</h1>
        <input
          className="inputBinary"
          type="text"
          placeholder="type a binary code"
          onChange={handlerBinaryValue}
        />
        <span className="resultDecimal">{numberValue}</span>
      </div>
    </div>
  );
};

export default ConvertBinary;
