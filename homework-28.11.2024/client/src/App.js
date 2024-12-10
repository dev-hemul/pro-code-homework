import { useEffect } from 'react';
import Layout from './components/layout/layout';
import './App.css';
import axios from 'axios';

function App() {
  const getTokens = async (login, password) => {
    try {
      const { data } = await axios.post('http://localhost:4000/auth/strategy/local/login', {
        login,
        password,
      });
      if (data.status !== 'ok') {
        console.error('Login failed');
        return null;
      }
      return data.payload.tokens;
    } catch (error) {
      console.error('Error during token fetch:', error.message);
      return null;
    }
  };

  const fetchProtectedPage = async (accessT) => {
    try {
      const { data } = await axios.post('http://localhost:4000/profile', { accessT });
      console.log('Protected page data:', data);
    } catch (error) {
      console.error('Failed to fetch protected page:', error.message);
    }
  };

  // Refresh Access token
  const refreshTokens = async (accessT, refreshT) => {
    try {
      const { data } = await axios.post('http://localhost:4000/auth/replaceTokens', { accessT, refreshT });
      console.log(data);
    } catch (error) {
      console.error('Failed to refresh tokens:', error.message);
    }
  };

  useEffect(() => {
    const fetchTokensAndProfile = async () => {
      const tokens = await getTokens('admin', '123');
      if (tokens) {
        console.log('Received tokens:', tokens);
        await fetchProtectedPage(tokens.accessT);
        
        await refreshTokens(tokens.accessT, tokens.refreshT);
      } else {
        console.error('Failed to fetch tokens');
      }
    };
    fetchTokensAndProfile();
  }, []);

  return (
    <div>
    
    </div>
  );
}

export default App;
