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
    console.log('VERIFY TOKEN !!!!!');
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        console.log('error token');
        const err = new Error('A token is required for authentication');
        err.status = 401;
        return next(err);
    }

    try {
        //console.log('ver token ', token);
        req.user = jwt.verify(token, tokenConfig.secret_key);
        //console.log('user id - ', req.user);
        return next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            const err = new Error('Token expired!');
            err.status = 403;
            return next(403);
        }
        return next( new Error(`Invalid Token!`));
    }
};

const tokenUtil = { generate, verifyToken };

export default tokenUtil;