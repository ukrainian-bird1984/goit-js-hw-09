const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  const data = {
    email: userEmail,
    message: userMessage,
  };
  saveToLocalStorage(storageKey, data);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  if (userEmail === '' || userMessage === '') {
    alert('Заповніть будь ласка форму');
    return;
  }

  console.log(loadFromLocalStorage(storageKey));

  form.reset();
  localStorage.removeItem(storageKey);
});

function saveToLocalStorage(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLocalStorage(key) {
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
  const data = loadFromLocalStorage(storageKey);

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

document.addEventListener('DOMContentLoaded', restoreData);
