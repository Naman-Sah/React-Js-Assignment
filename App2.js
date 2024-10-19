import React, { useState } from 'react';
import './App.css';

function LargestThree() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [largest, setLargest] = useState(null);

  const findLargestNumber = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);


    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
      setLargest('Please enter valid numbers');
    } else {
      const maxNumber = Math.max(number1, number2, number3);
      setLargest(`The largest number is: ${maxNumber}`);
    }
  };

  return (
    <div className="App">
      <h1>Find the Largest of Three Numbers</h1>
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter third number"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
        />
      </div>
      <button onClick={findLargestNumber}>Find Largest</button>
      {largest && <h2>{largest}</h2>}
    </div>
  );
}

export default LargestThree;
