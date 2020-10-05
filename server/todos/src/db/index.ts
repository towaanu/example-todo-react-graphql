import { createConnection } from "typeorm";
import * as entity from './entity'

function initDb() {
    return createConnection({
        type: "postgres",
        host: "postgres_db",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "todos",
        entities: Object.values(entity),
        logging: "all"
    })
}
export { initDb }