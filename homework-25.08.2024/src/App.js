import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true); // состояние загрузки
	
	
useEffect(() => {
		const getData = async () => {
			try {
				const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments');
				setItems(data); // сохраняем полученные данные
			} catch (error) {
				console.error('Error fetching data:', error); // обработка ошибки
			} finally {
				setLoading(false); // отключаем прелоадер в любом случае
			}
		}

		getData();
	}, []);
	
	return (
		<div className="App">
			{loading ? ( // Условный рендеринг
				<div>Loading...</div> // Прелоадер
			) : (
				items.map((item, index) => (
					<div key={index}>
						{item.id} - {item.name}
						<br/>
						{item.email}
						<hr/>
					</div>
				))
			)}
		</div>
	);
}


export default App;
