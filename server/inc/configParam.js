import 'dotenv/config';

export const configDB = {
    user:           process.env.DB_USER,
    password:       process.env.DB_PASSWORD,
    host:           process.env.DB_HOST,
    database:       process.env.DB_BASE_NAME,
    collection:     process.env.DB_COLLECTION_NAME,
};

export const serverConfig = {
    port: process.env.PORT,
};

export const tokenConfig = {
    secret_key: process.env.TOKEN_SECRET_KEY,
    expires_key:'24h',
};