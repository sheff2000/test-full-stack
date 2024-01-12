import jwt from 'jsonwebtoken';
import { tokenConfig } from '../inc/configParam.js';

const generate = (userData) => {
    try {
        const token = jwt.sign(
            userData, 
            tokenConfig.secret_key,
            { expiresIn: tokenConfig.expires_key }
        );
        return token
    } catch(err) {
        throw new Error(`Error in generate token - ${err}`)
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        console.log('error token');
        return next( new Error('A token is required for authentication'))
    }

    try {
        console.log('ver token ', token);
        req.user = jwt.verify(token, tokenConfig.secret_key);
        console.log('user id - ', req.user);
        return next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return next( new Error(`Token expired!`))
        }
        return next( new Error(`Invalid Token!`))
    }
};

const tokenUtil = { generate, verifyToken };

export default tokenUtil;