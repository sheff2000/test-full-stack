const BASE_SERVER_URL = 'http://localhost';

async function post(url, method, data) {
  try {
    const response = await fetch(`${BASE_SERVER_URL}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'виникла помилка');
    }
  } catch (error) {
    console.error('Помилка в запросі', error);
    throw error;
  }
}

export const api_user = {
  login: (data) => post('/user/login', 'POST', data),
  register: (data) => post('/user/register', 'POST', data),
  // Другие API-запросы...
};
