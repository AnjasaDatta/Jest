import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

export function camelCaseLetters(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1")
}
function App() {
  const [color, setColor] = useState('MediumVioletRed');
  const newColor = color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"
  const [disabled, setDisabled] = useState(false)
  const changeColor = () => {
    setColor(newColor)
  }
  const handleDisabled = () => {
    setDisabled(!disabled)
  }
  return (
    <div >
      <button disabled={disabled} onClick={changeColor} style={{ backgroundColor: disabled ? "grey " : color }}>Change to {camelCaseLetters(newColor)}</button>
      <input id="disable-button" onClick={handleDisabled} type="checkbox"></input>
      <label htmlFor='disable-button'>Disable</label>
    </div>
  );
}

export default App;
