import React from 'react';

const Header = ({ onLogin }) => {
    const handleLoginClick = (e) => {
        e.preventDefault();
        onLogin();
    };
    return (
        <div className="bg-gray-800 text-white fixed top-0 w-full z-10">
            <div className="flex justify-between items-center px-4 py-2">
                <div>
                    <span className="hidden sm:inline">Project Manager</span>
                    <span className="sm:hidden">PM</span>
                </div>
                <div>
                    <span className="hidden sm:inline">Projects: 0</span>
                    <span className="sm:hidden">0</span>
                    <span className="mx-2">|</span>
                    <span className="hidden sm:inline">Tasks: 0</span>
                    <span className="sm:hidden">0</span>
                </div>
                <div>
                    <a href="/login" onClick={handleLoginClick}>Войти</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
