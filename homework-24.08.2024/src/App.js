import './App.css';
import React from 'react';
import Button from './Components/Button';
import Text_field from './Components/Text_field';
import InputField from './Components/InputField';

function App() {
  const [isTextVisible, setIsTextVisible] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');

  const toggleTextVisibility = () => {
    setIsTextVisible(prevVisibility => !prevVisibility);
  }

  const handleInputChange = (value) => {
    setInputValue(value);
  }

  return (
    <div className="App">
      <Button toggleTextVisibility={toggleTextVisibility} />
      {isTextVisible && (
        <>
          <Text_field inputValue={inputValue} />
          <InputField inputValue={inputValue} onInputChange={handleInputChange} />
        </>
      )}
    </div>
  );
}

export default App;
