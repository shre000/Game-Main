import React, { useState } from 'react';
import Logfooter from './Logfooter';
import WinSection2 from '../My/Win Components/WinSection2';
import WinTopbar from '../My/Win Components/WinTopbar';

const Win = ({ availableBalance, setAvailableBalance }) => {
  const deductFromBalance = (selectedAmount) => {
    const newBalance = availableBalance - selectedAmount;
    console.log(newBalance);
    setAvailableBalance(newBalance);
  };

  return (
    <div>
      <WinTopbar availableBalance={availableBalance}  setAvailableBalance={setAvailableBalance} />
      <WinSection2 availableBalance={availableBalance}  setAvailableBalance={setAvailableBalance} />
      <Logfooter />
    </div>
  );
};

export default Win;
