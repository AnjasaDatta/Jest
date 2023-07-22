import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("Change to Blue")
  const changeColor = () => {
    setColor("blue");
    setText("Change to Red")
  }
  return (
    <div >
      <button onClick={changeColor} style={{ backgroundColor: color }}>{text}</button>
    </div>
  );
}

export default App;
