import './App.css';
import axios from 'axios';


function App() {
  const req = async () => {
    // Тест переходу на сторінку не маючи токена
    /*await axios.post('http://localhost:4000/profile');*/
    // Отримуємо згенерований токен
    const { data } = await axios.post('http://localhost:4000/auth/strategy/local/login', {login: 'admin', password: '123'});
    console.log(data);
    
  }
  
  req();
  return (
    <div>
    
    </div>
  );
}

export default App;
