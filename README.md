# Example todos react graphql
# Todos
This is a simple todo project.  
You can use docker to start the server or the client.  
You can find more information in [client](https://github.com/towaanu/example-todo-react-graphql/tree/main/client) and [server](https://github.com/towaanu/example-todo-react-graphql/tree/main/server) folders.

## Server 
- nodejs
- typescript
- graphql ( using apollo-server )
- typeorm

More information about the server [here](https://github.com/towaanu/example-todo-react-graphql/tree/main/server).

## Client 
- react
- typescript
- graphql ( using react-apollo )

More information about the client [here](https://github.com/towaanu/example-todo-react-graphql/tree/main/client).

## Docker
If you have docker installed and you just want to run the project you can do :  
`docker-compose up`   
This will run 4 containers : 
- client_web : The react app ( http://localhost:3000 )
- node_web : The node server ( http://localhost:8050 )
- postgres_db : A postgres container (user: postgres, password: postgres)
- adminer : Database management ( http://localhost:8080 )   

The app should be accessible at http://localhost:3000

For more information, you can look at the `docker-compose.yml` file at the root of the project