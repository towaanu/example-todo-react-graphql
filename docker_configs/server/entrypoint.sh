#!/bin/sh

DB_USER=postgres
DB_HOST=postgres_db

# wait until Postgres is ready
while ! pg_isready -q -h $DB_HOST -p 5432 -U $DB_USER
do
  echo "$(date) - waiting for database to start"
  sleep 2
done

./node_modules/.bin/typeorm migration:run
node dist/main.js