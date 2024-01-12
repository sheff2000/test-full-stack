// работа с паролями
import bcrypt from 'bcrypt';

const comparePassword = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.error('Error comparing password and hash:', error);
        throw new Error(`Error comparing password and hash: ${error}`)
    }
};

const generatePasswordHash = async (password) => {
    const saltRounds = 10;
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        console.error('Error generating password hash:', error);
        throw new Error(`Error generating password hash: ${error}`)
    }
};

const password = {
    comparePassword,
    generatePasswordHash,
}

export default password;