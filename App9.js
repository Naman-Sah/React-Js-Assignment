import React, { useState } from 'react';
import './App.css';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const findPrimes = () => {
  const primes = [];
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

function PrintPrime() {
  const [primes, setPrimes] = useState([]);

  const handleFindPrimes = () => {
    const primeNumbers = findPrimes();
    setPrimes(primeNumbers);
  };

  return (
    <div>
      <h1>Prime Numbers Between 1 and 100</h1>
      <button onClick={handleFindPrimes}>Find Prime Numbers</button>
      <div>
        {primes.length > 0 ? (
          <ul>
            {primes.map((prime, index) => (
              <li key={index}>{prime}</li>
            ))}
          </ul>
        ) : (
          <p>Click the button to display prime numbers.</p>
        )}
      </div>
    </div>
  );
}

export default PrintPrime;
