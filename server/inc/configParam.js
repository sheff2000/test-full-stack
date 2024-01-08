import 'dotenv/config';

export const configDB = {
    user:           process.env.DB_USER,
    password:       process.env.DB_PASSWORD,
    userRead:       process.env.DB_USER_READ,
    passwordRead:   process.env.DB_PASSWORD_READ,
    host:           process.env.DB_HOST,
    database:       process.env.DB_BASE_NAME,
    collection:     process.env.DB_COLLECTION_NAME,
};

export const serverConfig = {
    port: process.env.PORT,
};