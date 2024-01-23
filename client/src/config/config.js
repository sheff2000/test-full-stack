const config = {
    serverApiBaseURL: 'http://localhost:3002',
    validLoginRgp: /^[A-Za-z0-9_-]+$/,
    validPassword: {
        minLen: 5,
    },
    nameProject: 'Projects Manager',
    tokenLocalStorage: 'authToken',
    userInfoLocalStorage: 'userInfo',
};

export default config;
