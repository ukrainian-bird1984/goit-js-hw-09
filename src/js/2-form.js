const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  const userName = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  const data = {
    email: userName,
    message: userMessage,
  };
  saveToLs(storageKey, data);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const userName = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  if (userName === '' || userMessage === '') {
    alert('Заповніть будь ласка форму');
    return;
  }

  const data = loadFromLs(storageKey);
  console.log(data);
  form.reset();
  localStorage.removeItem(storageKey);
});

function saveToLs(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLs(key) {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result || {}; 
  } catch (error) {
    console.error('Помилка при розкодуванні даних з localStorage:', error.message);
    return {}; 
  }
}

function restoreData() {
  const data = loadFromLs(storageKey);

  form.elements.email.value = (data.email || '').trim();
  form.elements.message.value = (data.message || '').trim();
}

restoreData();
