# SPP

SETUP:

`npm install`

`cd ./server`

`npm install`

`cd ../`

`cd ./frontend`

`npm install`

START SERVER:

`cd ./server` - *call from parent directory*

`npm start`

RUN CLIENT:

`cd ./frontend` - *call from parent directory*

`npm start`


# Setup Postgresql

Install it locally: https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/#creatingapostgresqldatabase

`psql postgres`

`CREATE ROLE admin WITH LOGIN PASSWORD 'password'<b>;</b>`

`ALTER ROLE admin CREATEDB;`

`\q`

`psql -d postgres -U admin`

`CREATE DATABASE spp`

###psql arguments:
-d *databasename* - database name to connect to </p>
-U *user* - database user name </p>
\q - quit from session </p>
