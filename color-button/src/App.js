import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === "red" ? "blue" : "red"
  const [disbled,setDisabled] = useState(false)
  const changeColor = () => {
    setColor(newColor)
  }
  const handleDisabled = () =>{
    setDisabled(!disbled)
  }
  return (
    <div >
      <button disabled={disbled} onClick={changeColor} style={{ backgroundColor: color }}>Change to {newColor}</button>
      <input onClick = {handleDisabled}  type="checkbox"></input>
    </div>
  );
}

export default App;
