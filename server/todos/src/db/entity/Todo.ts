import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("todos")
class Todo {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    label!: string;

    @Column({ name: "is_done", nullable: true })
    isDone!: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date

}

export default Todo