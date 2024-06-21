let updatePlaceholderVisibility = () => {
      const dateInput = document.getElementById('date-input');
      const datePlaceholder = document.querySelector('.date-placeholder');
      if (window.innerWidth <= 576 && !dateInput.value) {
        datePlaceholder.style.display = 'block';
      } else {
        datePlaceholder.style.display = 'none';
      }
    }

    // Обновить видимость при загрузке страницы и изменении размера окна
    window.addEventListener('load', updatePlaceholderVisibility);
    window.addEventListener('resize', updatePlaceholderVisibility);

    const dateInput = document.getElementById('date-input');
    const datePlaceholder = document.querySelector('.date-placeholder');

    dateInput.addEventListener('focus', () => {
      datePlaceholder.style.display = 'none';
    });

    dateInput.addEventListener('blur', () => {
      if (!dateInput.value && window.innerWidth <= 576) {
        datePlaceholder.style.display = 'block';
      }
    });