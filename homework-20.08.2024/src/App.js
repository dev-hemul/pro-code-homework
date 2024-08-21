import React, {useState} from 'react';
import './App.css';
import asus from './asus.webp';
import acer from './acer.webp';
import apple from './apple.webp';


function App() {

  const [items, setItems] = useState([
    {id: 1, name: 'Asus', model: 'Vivobook 15s', img: asus},
    {id: 2, name: 'Acer', model: 'Aspire pro design', img: acer},
    {id: 3, name: 'Apple', model: 'Macbook Pro 2022', img: apple}
  ])
  
  const [showClearButton, setShowClearButton] = useState(true);
  
  const clear = () => {
    setItems([]);
    setShowClearButton(false);
  }
 
  return (
    <div>
      <h1>Список ноутбуків</h1>
    <div className="App">
      {
        items.map((item) => {
          return (
            <div className="item" key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.model}</p>
              <img src={item.img} alt=""/>
              <button className="button">Купити</button>
            </div>
          )
        })
      }
    </div>
      {showClearButton && (
        <button className="clear" onClick={clear}>Очистити список</button>
      )}
      </div>
  );
}

export default App;
