export const validateLogin = (login) => {
    if (!login) return false; 
    return /^[A-Za-z0-9_-]+$/.test(login);
};
  
export const validatePassword = (password) => {
    if (!password) return false;
    return password.length >= 6;
};
  