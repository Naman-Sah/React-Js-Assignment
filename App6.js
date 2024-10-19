import React, { useState } from 'react';
import './App.css';

function Palindrome() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setResult('Please enter a string');
    } else {
      const palindromeResult = isPalindrome(input) ? 'Yes, it is a palindrome!' : 'No, it is not a palindrome';
      setResult(palindromeResult);
    }
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a string"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      {result && <h2>{result}</h2>}
    </div>
  );
}

export default Palindrome;
