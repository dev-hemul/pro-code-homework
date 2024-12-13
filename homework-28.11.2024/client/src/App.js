import { useState, useEffect } from 'react';
import Layout from './components/layout/layout';
import Login from './components/auth/login/index';
import Profile from './components/profile/index';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Используем новый API из react-router-dom
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
    <Router>
      <div>
        <Layout>
           <Routes>
            {/* Роут для логина */}
            <Route path="/" element={<Login />} />

            {/* Защищенный роут для профиля */}
            <Route path="/profile" element={<Profile />} />
	            </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
