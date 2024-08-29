import React from 'react';
import style from './style.module.css';

function InputField({ onInputChange, inputValue }) {
  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Добавте інформацію до статті"
        className={style.input}
      />
      <p>{inputValue}</p>
    </div>
  );
}

export default InputField;