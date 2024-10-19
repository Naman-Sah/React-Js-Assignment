import React, { useState } from 'react';
import './App.css';

function SumofNUm() {
  const [input, setInput] = useState('');
  const [sum, setSum] = useState(null);
  
  const calculateSum = (numbers) => {
    const numArray = numbers.split(',').map(Number);  
    const totalSum = numArray.reduce((acc, curr) => acc + curr, 0);
    setSum(totalSum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setSum('Please enter some numbers');
    } else {
      calculateSum(input);
    }
  };

  return (
    <div>
      <h1>Sum All Numbers in an Array</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Calculate Sum</button>
      </form>
      {sum !== null && <h2>The sum is: {sum}</h2>}
    </div>
  );
}

export default SumofNUm;
