import React, { useState } from 'react';
import './App.css';

const countCharacterFrequency = (str) => {
  const frequency = {};
  for (let char of str) {
    char = char.toLowerCase(); 
    if (char in frequency) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
};

function CountCharFre() {
  const [input, setInput] = useState('');
  const [frequency, setFrequency] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = countCharacterFrequency(input);
    setFrequency(result);
  };

  return (
    <div>
      <h1>Character Frequency Counter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Count Frequency</button>
      </form>
      <div>
        {Object.keys(frequency).length > 0 && (
          <ul>
            {Object.entries(frequency).map(([char, count], index) => (
              <li key={index}>
                {char}: {count}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CountCharFre;
