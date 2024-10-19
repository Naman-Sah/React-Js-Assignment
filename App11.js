import React, { useState } from 'react';
import './App.css';
const isPalindrome = (num) => {
  const strNum = num.toString();
  const reversedStrNum = strNum.split('').reverse().join('');
  return strNum === reversedStrNum;
};

function NumPalin() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(input, 10);
    
    if (isNaN(num)) {
      setResult('Please enter a valid number');
    } else {
      if (isPalindrome(num)) {
        setResult(`${num} is a palindrome.`);
      } else {
        setResult(`${num} is not a palindrome.`);
      }
    }
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      <h2>{result}</h2>
    </div>
  );
}

export default NumPalin;
