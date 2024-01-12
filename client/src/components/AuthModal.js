import React, { useState } from 'react';

const handleSubmitLogin = async (event) => {
    event.preventDefault();
    // отправка на авторизацию
};

const handleSubmitRegister = async (event) => {
    event.preventDefault();
    // отправка на регистрацию
};

const AuthModal = ({ onClose }) => {
  const [tab, setTab] = useState('login');

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-4 md:max-w-md mx-auto rounded-lg">
        <div className="flex justify-between">
          <button className={`p-2 ${tab === 'login' ? 'font-bold' : ''}`} onClick={() => setTab('login')}>Авторизация</button>
          <button className={`p-2 ${tab === 'register' ? 'font-bold' : ''}`} onClick={() => setTab('register')}>Регистрация</button>
        </div>
        {tab === 'login' && (
          <form onSubmit={handleSubmitLogin}>
            <input type="text" placeholder="Логин" className="border p-2 w-full my-2" />
            <input type="password" placeholder="Пароль" className="border p-2 w-full my-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Войти</button>
          </form>
        )}
        {tab === 'register' && (
          <form onSubmit={handleSubmitRegister}>
            <input type="text" placeholder="Логин" className="border p-2 w-full my-2" />
            <input type="password" placeholder="Пароль" className="border p-2 w-full my-2" />
            <button type="submit" className="bg-green-500 text-white p-2 w-full">Зарегистрировать</button>
          </form>
        )}
        <button onClick={onClose} className="bg-red-500 text-white p-2 w-full mt-4">Отмена</button>
      </div>
    </div>
  );
};

export default AuthModal;
