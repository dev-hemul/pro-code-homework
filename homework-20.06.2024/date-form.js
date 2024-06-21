document.addEventListener('DOMContentLoaded', () => {
  let updatePlaceholderVisibility = () => {
    const dateInput = document.getElementById('date-input');
    const datePlaceholder = document.querySelector('.date-placeholder');
    if (!dateInput || !datePlaceholder) return;
    if (window.innerWidth <= 576 && !dateInput.value) {
      datePlaceholder.style.display = 'block';
    } else {
      datePlaceholder.style.display = 'none';
    }
  }

  window.addEventListener('load', updatePlaceholderVisibility);
  window.addEventListener('resize', updatePlaceholderVisibility);

  const dateInput = document.getElementById('date-input');
  const datePlaceholder = document.querySelector('.date-placeholder');

  if (dateInput && datePlaceholder) {
    dateInput.addEventListener('focus', () => {
      datePlaceholder.style.display = 'none';
    });

    dateInput.addEventListener('blur', () => {
      if (!dateInput.value && window.innerWidth <= 576) {
        datePlaceholder.style.display = 'block';
      }
    });
  }
});