import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTodos1601883235202 implements MigrationInterface {

    public up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(new Table({
            name: "todos",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "label", type: "varchar", isNullable: false},
                { name: "is_done", type: "boolean", isNullable: false, default: false },
                { name: "created_at", type: "timestamp", default: "now()", isNullable: false },
                { name: "updated_at", type: "timestamp", default: "now()", isNullable: false }
            ]
        }))
    }

    public down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable("todos")
    }

}