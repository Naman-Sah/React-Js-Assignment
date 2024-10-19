import React, { useState } from 'react';
import './App.css';

function Factorial() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      setResult('Please enter a valid non-negative integer');
    } else {
      const factResult = factorial(num);
      setResult(`Factorial of ${num} is: ${factResult}`);
    }
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Calculate Factorial</button>
      </form>
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default Factorial;
