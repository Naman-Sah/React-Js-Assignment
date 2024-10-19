import React, { useState } from 'react';
import './App.css';

function Allnum100() {
  const [numbers, setNumbers] = useState([]);

  const printNumbers = () => {
    const nums = [];
    for (let i = 1; i <= 100; i++) {
      nums.push(i);
    }
    setNumbers(nums);
  };

  return (
    <div>
      <h1>Print Numbers from 1 to 100</h1>
      <button onClick={printNumbers}>Print Numbers</button>
      <div>
        {numbers.map((number) => (
          <span key={number}>{number} </span>
        ))}
      </div>
    </div>
  );
}

export default Allnum100;
