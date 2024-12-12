import {useEffect} from 'react';
import Layout from './components/layout/layout';
import Login from './components/auth/login/index';
import axios from 'axios';
import './App.css';

function App() {
	
	
	/*const fetchProtectedPage = async (accessT) => {
		try {
			const {data} = await axios.post('http://localhost:4000/profile', {accessT});
			console.log('Protected page data:', data);
		} catch (error) {
			console.error('Failed to fetch protected page:', error.message);
		}
	};
	
	// Refresh Access token
	const refreshTokens = async (accessT, refreshT) => {
		try {
			const {data} = await axios.post('http://localhost:4000/auth/replaceTokens', {
				accessT,
				refreshT
			});
			console.log(data);
		} catch (error) {
			console.error('Failed to refresh tokens:', error.message);
		}
	};*/
	
	
	
	return (
		<div>
			<Layout>
        <Login />
			</Layout>
		</div>
	);
}

export default App;
