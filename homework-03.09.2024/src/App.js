import './App.css'; // Убедитесь, что здесь подключены необходимые стили
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://swapi.dev/api/people/1/');
			setData(response.data);
			setTimeout(() => setLoading(false), 3000);
		};
		fetchData();
	}, []);
	
	if (loading) {
		return (
			<div className="bg-zinc-900 flex flex-col items-center justify-center h-screen">
				<span className="spin mb-5" role="status"></span>
				<span className="text-white">Loading...</span>
			</div>
		);
	}
	
	return (
		<div className="bg-zinc-900">
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="text-violet-700 text p-2">Name: {data.name}</div>
			<div className="text-violet-700 text p-2">Height: {data.height}</div>
			<div className="text-violet-700 text p-2">Mass: {data.mass}</div>
			<div className="text-violet-700 text p-2">Hair Color: {data.hair_color}</div>
			<div className="text-violet-700 text p-2">Skin Color: {data.skin_color}</div>
			<div className="text-violet-700 text p-2">Eye Color: {data.eye_color}</div>
			<div className="text-violet-700 text p-2">Birth Year: {data.birth_year}</div>
			<div className="text-violet-700 text p-2">Gender: {data.gender}</div>
		</div>
			</div>
	);
}

export default App;
