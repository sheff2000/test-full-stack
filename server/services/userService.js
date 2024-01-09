// логика работы с юзерами - создание/обновление
import User from '../models/modelUser.js';
import { validUserDataToUserCreate } from '../validation/userValidation.js';

const createUser = async (userData) => {
    try {
        const resultValid = await validUserData(userData); // валидация на наличе всех нужніх данніх
    } catch(err) {
        throw err;
    }
};

const updatePasswordUser = async (passData) => {

};

const getUserById = async (userId) => {

};

export { createUser, 
         getUserById,
         updatePasswordUser,
};
