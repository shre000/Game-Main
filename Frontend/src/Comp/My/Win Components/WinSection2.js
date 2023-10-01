import React, { useState, useEffect } from "react";
import Parity from "./Parity";
import WinSection3 from "./WinSection3";

const WinSection2 = ({
  availableBalance,
  setAvailableBalance,
  selectedAmount,
}) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomColor, setRandomColor] = useState(null);
  return (
    <>
      <WinSection3
        availableBalance={availableBalance}
        setAvailableBalance={setAvailableBalance}
        selectedAmount={selectedAmount}
        setRandomNumber={setRandomNumber}
        setRandomColor={setRandomColor}
      />
      <div>
        <Parity
          //period={period}
          randomNumber={randomNumber}
          randomColor={randomColor}
        />
      </div>
    </>
  );
};

export default WinSection2;
