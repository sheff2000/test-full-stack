# test-full-stack
web application for project management - test task



# server
<pre>
роути - express
логування запитів - morgan
парсінг JSON-запитів - body-parser
робота з MongoDB - mongoose
конфиг-параметры среды и подключений в .env - dotenv
підключення конфіг-параметрів через файл @/inc/configParam.js

</pre>

Config file server .env
<pre>
PORT=3002
DB_USER=nameUserMongo
DB_PASSWORD=passworddb
DB_HOST=host_mongodb
DB_BASE_NAME=naemdbMongo
DB_COLLECTION_NAME=collection
TOKEN_SECRET_KEY=secretKey
NODE_ENV=notproduction/prod
</pre>