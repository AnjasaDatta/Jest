import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === "red" ? "blue" : "red"
  const [disabled,setDisabled] = useState(false)
  const changeColor = () => {
    setColor(newColor)
  }
  const handleDisabled = () =>{
    setDisabled(!disabled)
  }
  return (
    <div >
      <button disabled={disabled} onClick={changeColor} style={{ backgroundColor: disabled ? "grey " : color }}>Change to {newColor}</button>
      <input id = "disable-button" onClick = {handleDisabled}  type="checkbox"></input>
      <label htmlFor='disable-button'>Disable</label>
    </div>
  );
}

export default App;
