import React, { useState } from 'react';
import './App.css';

const findLargestElement = (arr) => {
  if (arr.length === 0) return null;
  return Math.max(...arr); 
};

function LargestinAR() {
  const [input, setInput] = useState('');
  const [largest, setLargest] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = input.split(',').map(num => parseFloat(num.trim()));
    const largestElement = findLargestElement(arr);
    
    if (largestElement !== null) {
      setLargest(`The largest element is: ${largestElement}`);
    } else {
      setLargest('Please enter a valid array of numbers.');
    }
  };

  return (
    <div>
      <h1>Find Largest Element in Array</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Find Largest</button>
      </form>
      <h2>{largest}</h2>
    </div>
  );
}

export default LargestinAR;
