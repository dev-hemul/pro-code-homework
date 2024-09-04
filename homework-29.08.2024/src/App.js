import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
      setData(response.data); // Оновлюємо стан з отриманими данними
    };

    fetchData();
  }, [postId]);

  const handleButtonClick = () => {
    setPostId(prevPostId => prevPostId + 1); // Збільшуємо значення postId при кожному натисканні
  };

  return (
    <div>
      {data && <div>Data: {JSON.stringify(data)}</div>}
      <br/>
      <button onClick={handleButtonClick}>Зробити новий запит</button>
    </div>
  );
}

export default App;
