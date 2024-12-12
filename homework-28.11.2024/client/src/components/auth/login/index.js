import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isResetMode, setIsResetMode] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const getTokens = async (login, password) => {
    try {
      const { data } = await axios.post('http://localhost:4000/auth/strategy/local/login', {
        login,
        password,
      });
      if (data.status === 'ok') {
        toast.success('Ви успішно залогінились і отримали токен!');
      }
    } catch (error) {
      console.error('Error during token fetch:', error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      try {
        const tokens = await getTokens(login, password);
        if (tokens) {
          console.log('Received tokens:', tokens);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      // Регистрация
      try {
        const { data } = await axios.post('http://localhost:4000/auth/strategy/local/registration', {
          login,
          password,
          email,
        });
        if (data.status === 'ok') {
          toast.success('Реєстрація успішна! Тепер увійдіть.');
          console.log(`Ваш access Token ${data.message.accessT}`);
          console.log(`Ваш refresh Token ${data.message.refreshT}`);
          setIsLoginMode(true);
        }
      } catch (error) {
        console.error('Error during registration:', error.message);
        toast.error('Такий логін або e-mail вже існує!');
      }
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/auth/forgot-password', { email });
      if (data.status === 'ok') {
        toast.success('Інструкція з відновлення паролю відправлена на вашу пошту.');
        setIsResetMode(false);
        setIsLoginMode(true);
      } else {
        toast.error('Не вдалося відправити інструкцію.');
      }
    } catch (error) {
      console.error('Error during password reset:', error.message);
      toast.error('Сталася помилка під час запиту.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {!isResetMode ? (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {isLoginMode ? 'Увійти в систему' : 'Реєстрація'}
            </h2>
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
              {!isLoginMode && (
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              )}
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
                {isLoginMode ? 'Увійти' : 'Зареєструватись'}
              </button>
            </form>
            <div className="text-sm text-center">
              {isLoginMode ? (
                <>
                  <p className="mb-2">
                    Забули пароль?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setIsResetMode(true);
                        setEmail('');
                      }}
                      className="text-red-600 hover:text-red-400 font-medium"
                    >
                      Відновити
                    </button>
                  </p>
                  <p>
                    Немає аккаунту?{' '}
                    <button
                      type="button"
                      onClick={() => setIsLoginMode(false)}
                      className="text-green-600 hover:text-green-400 font-medium"
                    >
                      Зареєструватися
                    </button>
                  </p>
                </>
              ) : (
                <p>
                  Вже є аккаунт?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLoginMode(true)}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    Увійти
                  </button>
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">Відновлення паролю</h2>
            <form className="space-y-4" onSubmit={handlePasswordReset}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md focus:outline-none text-sm font-medium"
              >
                Відновити
              </button>
            </form>
            <button
              type="button"
              onClick={() => setIsResetMode(false)}
              className="w-full mt-4 text-indigo-600 hover:underline text-sm"
            >
              Повернутися до входу
            </button>
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
