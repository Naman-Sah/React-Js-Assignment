import React, { useState } from 'react';
import './App.css';

function CheckVowels() {
  const [input, setInput] = useState('');
  const [vowelCount, setVowelCount] = useState(null);

  const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setVowelCount('Please enter a valid string');
    } else {
      const result = countVowels(input);
      setVowelCount(`The number of vowels is: ${result}`);
    }
  };

  return (
    <div>
      <h1>Vowel Counter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Count Vowels</button>
      </form>
      {vowelCount !== null && <h2>{vowelCount}</h2>}
    </div>
  );
}

export default CheckVowels;
