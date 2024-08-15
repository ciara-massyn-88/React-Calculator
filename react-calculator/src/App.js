import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isNewCalculation, setIsNewCalculation] = useState(false);

  const handleClick = (value) => {
    if (isNewCalculation) {
      setInput(value);
      setIsNewCalculation(false);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setHistory([...history, `${input} = ${result}`]);
      setInput(result.toString());
      setIsNewCalculation(true);
    } catch (error) {
      setInput('Error');
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="app-container">
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('0')} className="zero">0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
