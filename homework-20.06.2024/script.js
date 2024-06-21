 const dateInput = document.getElementById('date-input');
    const datePlaceholder = document.querySelector('.date-placeholder');

    dateInput.addEventListener('focus', () => {
      if (window.innerWidth <= 576) {
        datePlaceholder.style.display = 'none';
      }
    });

    dateInput.addEventListener('blur', () => {
      if (!dateInput.value && window.innerWidth <= 576) {
        datePlaceholder.style.display = 'block';
      }
    });