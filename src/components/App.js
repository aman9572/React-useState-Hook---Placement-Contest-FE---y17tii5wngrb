
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
  //code here 

  const [inputValue, setinputValue] = useState("");
  const [text, setText] = useState("")

  const changeInput = (e) => {
    setinputValue(e, taget.value)
  }
  const buttonClick = () => {
    setText(text + inputValue)
    setinputValue("")
  }
  return (
    <div>
      <input id='input' value={inputValue} onChange={changeInput} />

      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
