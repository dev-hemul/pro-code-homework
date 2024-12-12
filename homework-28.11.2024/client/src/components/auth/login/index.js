import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const getTokens = async (login, password) => {
    try {
      const { data } = await axios.post('http://localhost:4000/auth/strategy/local/login', {
        login,
        password,
      });
      
      /*if (data.status !== 'ok') {
        console.error('Login failed');
        return null;
      }*/
      
      if (data.status === 'ok') {
        toast.success('Ви успішно залогінились і отримали токен!');
      }else if (data.status !== 400) {
        toast.error("Не валідний логін і пароль!");
      }
      
      return data.payload.tokens;
    } catch (error) {
      console.error('Error during token fetch:', error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokens = await getTokens(login, password);
      if (tokens) {
        console.log('Received tokens:', tokens);
      } else {
        console.error('Failed to log in');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Увійти в систему</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login" className="block text-sm font-medium text-gray-700">
              Логін
            </label>
            <input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md focus:outline-none text-sm font-medium"
          >
            Увійти
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
