import React from 'react';
import style from './style.module.css';
import Text_field from "../Text_field";


function Button() {
  
  const [button, setButton] = React.useState("Показати статтю");
  
  const showHideButton = () => {
     setButton((prevText) =>
      prevText === "Показати статтю" ? "Сховати статтю" : "Показати статтю"
    );
  }
  
  return (
    <div>
    <button className={style.button} type="button" onClick={showHideButton}>{button}</button>
    </div>
  );
}

export default Button;