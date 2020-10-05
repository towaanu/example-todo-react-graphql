# Server
## Docker 
If you have docker installed, you can run :  
`./run.docker.sh`  
*Note: `run.docker.sh` need to be executable (`chmod +x run.docker.sh`)*   

The script will start 3 containers :
- postgres_db: postgres database
- adminer: Web database management tools available at http://localhost:8080
- node_web: A nodejs container   

*You can find more information about started containers in `docker-compose.yml`*

### Run the app 
When you run `run.docker.sh`, you should have an access to the node_web container.  
Inside the container you can run the following commands.  
#### Install depedencies
`npm install`
#### Create the database
`npm run typeorm:migration:run`   
#### Run the graphql server
`npm start`   
The server should be accessible at http://localhost:8050

## Without docker
If you don't have docker, you need 2 things to launch the server :   
- A postgres database
- Nodejs installed

You need to be at the root of the `todos` folder before running "Run the app" commands.  
`cd ./todos`

You can then follow steps described in "Run the app" section.