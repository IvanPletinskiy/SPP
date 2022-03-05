# SPP

SETUP:

npm install

cd ./sever

npm install

cd ../

cd ./frontend

npm install


START SERVER:

npm start

RUN CLIENT:

cd ./frontend

npm start


#Setup Postgresql

Install it locally: https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/#creatingapostgresqldatabase

psql postgres

CREATE ROLE admin WITH LOGIN PASSWORD 'password';

ALTER ROLE admin CREATEDB;

\q

psql -d postgres -U me

CREATE DATABASE spp;
