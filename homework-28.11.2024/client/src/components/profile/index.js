import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Получаем токен из localStorage
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      setError('Ви не маєте доступ до цієї сторінки. Вам потрібно залогінитись!');
      return;
    }

    const fetchProfileData = async () => {
      try {
        // Запрос на защищенный роут
        const { data } = await axios.post(
          'http://localhost:4000/profile',
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProfileData(data.payload);
      } catch (error) {
        setError('Failed to fetch profile');
      }
    };

    fetchProfileData();
  }, []);

  if (error) {
    return <div>
      {error}
      <br/>
      <a href="/">Повернутись на сторінку логіна</a></div>;
  }

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <p>User ID: {profileData.uid}</p>
    </div>
  );
};

export default Profile;
