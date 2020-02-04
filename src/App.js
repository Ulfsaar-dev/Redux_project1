import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';


// In a component [1].
 
/*
// then [2]

*/
function App() {
  const [count, setCount] = useState(0); 
  const usePrevious = (value) => {
    const ref = useRef();
  
    useEffect(() => {
      ref.current = value;
    }, [value]);   
    return ref.current;
  }
  let prevCount = usePrevious(count);
  console.log(prevCount);

  const buttonclick = () => {
    setCount(count +1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={buttonclick}>ttttt</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
