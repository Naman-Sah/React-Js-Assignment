import React, { useState } from 'react';
import './App.css';

function ReverseNUM() {
  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState(null);

  const reverseDigits = (num) => {
    const reversedNum = num.split('').reverse().join('');
    return reversedNum;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setReversed('Please enter a valid number');
    } else if (isNaN(input)) {
      setReversed('Please enter a valid number');
    } else {
      const result = reverseDigits(input);
      setReversed(`The reversed number is: ${result}`);
    }
  };

  return (
    <div>
      <h1>Reverse Digits of a Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Reverse</button>
      </form>
      {reversed && <h2>{reversed}</h2>}
    </div>
  );
}

export default ReverseNUM;
