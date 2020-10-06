FROM node:alpine as build

WORKDIR /app

COPY ./client/todos/package.json /app/package.json
COPY ./client/todos/package-lock.json /app/package-lock.json
COPY ./client/todos/tsconfig.json /app/tsconfig.json
COPY ./client/todos/public /app/public
COPY ./client/todos/src /app/src

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY ./docker_configs/client/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /var/www/app

EXPOSE 80
CMD ["nginx-debug", "-g", "daemon off;"]