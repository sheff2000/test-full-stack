import React, { useState } from 'react';
import { api_user } from '../api/api-user';
import { validateLogin, validatePassword } from '../utilit/validation-userForm';


const AuthModal = ({ onClose }) => {
    const [tab, setTab] = useState('login');
    const [loginData, setLoginData] = useState({ login: '', password: '' });
    const [registerData, setRegisterData] = useState({ login: '', password: '' });

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        
        if (!validateLogin(loginData.login)) {
            alert('Логін має містити тільки латинсські літери, числа та знаки "-" і "_" ');
            return;
        }
      
        if (!validatePassword(loginData.password)) {
            alert('Пароль має бути не меньше 6 символів в довжину');
            return;
        }

        try {
            const data = await api_user.login(loginData);
            // где то тут сохраняем токен - вызовем функцию сервиса для работы с токеном
            onClose();
        } catch (error) {
            console.error('помилка авторизації ', error);
        }
    };
    
    const handleSubmitRegister = async (event) => {
        event.preventDefault();

        if (!validateLogin(registerData.login)) {
            alert('Логін має містити тільки латинсські літери, числа та знаки "-" і "_" ');
            return;
        }
      
        if (!validatePassword(registerData.password)) {
            alert('Пароль має бути не меньше 6 символів в довжину');
            return;
        }

        try {
            const data = await api_user.register(registerData);
            // типа зарегились удачно и в отввет получили токен - візов сервиса для работі с токеном
            onClose();
        } catch (error) {
            console.error('Помилка реєестрації', error);
        }
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
          ...prevData,
          [name]: value
        }));
    };
    
      const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prevData => ({
          ...prevData,
          [name]: value
        }));
    };
    
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white p-4 md:max-w-md mx-auto rounded-lg">
            <div className="flex justify-between">
            <button className={`p-2 ${tab === 'login' ? 'font-bold' : ''}`} onClick={() => setTab('login')}>Авторизація</button>
            <button className={`p-2 ${tab === 'register' ? 'font-bold' : ''}`} onClick={() => setTab('register')}>Реєестрація</button>
            </div>
            {tab === 'login' && (
            <form onSubmit={handleSubmitLogin}>
                <input  type="text" 
                        name="login" 
                        placeholder="Логин" 
                        className="border p-2 w-full my-2" 
                        value={loginData.login}
                        onChange={handleLoginChange} />
                <input  type="password" 
                        name="password" 
                        placeholder="Пароль" 
                        className="border p-2 w-full my-2" 
                        value={loginData.password}
                        onChange={handleLoginChange} />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Авторизація</button>
            </form>
            )}
            {tab === 'register' && (
            <form onSubmit={handleSubmitRegister}>
                <input  type="text" 
                        name="login" 
                        placeholder="Логин" 
                        className="border p-2 w-full my-2" 
                        value={registerData.login}
                        onChange={handleRegisterChange} />
                <input  type="password" 
                        name="password" 
                        placeholder="Пароль" 
                        className="border p-2 w-full my-2" 
                        value={registerData.password}
                        onChange={handleRegisterChange} />
                <button type="submit" className="bg-green-500 text-white p-2 w-full">Зареєструвати</button>
            </form>
            )}
            <button onClick={onClose} className="bg-red-500 text-white p-2 w-full mt-4">Відміна</button>
        </div>
        </div>
    );
};

export default AuthModal;
