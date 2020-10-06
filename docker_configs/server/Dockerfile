FROM node:alpine as build

WORKDIR /app

COPY ./server/todos/package.json /app/package.json
COPY ./server/todos/package-lock.json /app/package-lock.json
COPY ./server/todos/tsconfig.json /app/tsconfig.json
COPY ./server/todos/src /app/src

RUN npm install
RUN npm run build

FROM node:alpine

COPY --from=build /app/dist /app/dist
COPY ./server/todos/package.json /app/package.json
COPY ./server/todos/package-lock.json /app/package-lock.json


# RUN apk add --no-cache openssl ncurses-libs postgresql-client
RUN apk add --no-cache postgresql-client

WORKDIR /app

RUN npm install
# RUN npm install -g typeorm

COPY ./docker_configs/server/entrypoint.sh /app/entrypoint.sh
COPY ./docker_configs/server/ormconfig.json /app/ormconfig.json

RUN chmod +x ./entrypoint.sh

EXPOSE 8050
CMD ["./entrypoint.sh"]