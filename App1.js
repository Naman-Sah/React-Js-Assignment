import React, {useState} from 'react';

function EvenOdd(){
  const [x, setX] = useState('');
  const [result, setResult] = useState('');

  const oddEven = () => {
    const numX = parseFloat(x);
    if (numX % 2 == 0){
      setResult(`It is even number.`);
    }
    else{
      setResult( `It is odd number.`);
    }
  };

  return (
    <div>
      <input
        type = "number"
        value = {x}
        onChange = {(e) => setX(e.target.value)}
        placeholder="Enter X"
      />
      <button onClick = {oddEven}>EvenOdd</button>
      <p>{result}</p>
    </div>
  )
}

export default EvenOdd;