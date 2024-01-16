const BASE_SERVER_URL = 'http://localhost:3002';

async function post(url, method, data) {
    try {
        console.log('API - url ', url, ' | method - ', method, ' | data - ', data);
        const response = await fetch(`${BASE_SERVER_URL}${url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    if (response.ok) {
        return await response.json();
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
    getProjectsList: (data) => post('/user/login', 'POST', data),
    getProject: (data) => post('/user/register', 'POST', data),
    // Другие API
};
