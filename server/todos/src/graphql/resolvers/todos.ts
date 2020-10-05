import { getRepository } from 'typeorm';
import { TodoInput, TodoUpdateInput } from './types';
import { Todo } from '../../db/entity';

function findTodos(): Promise<Todo[]> {
    return getRepository(Todo).find({
        order: {createdAt: "ASC"}
    });
}

function createTodo(_root: any, args: { todo: TodoInput  }): Promise<Todo> {
    const { todo } = args;
    const todoRepo = getRepository(Todo);
    const newTodo = todoRepo.create(todo);
    return todoRepo.save(newTodo);
}

async function updateTodo(_root: any, args: {id: string, todo: TodoUpdateInput}): Promise<Todo | undefined> {
    const { id, todo } = args;
    const todoRepo = getRepository(Todo);
    await todoRepo.update(id, todo);
    return await todoRepo.findOne(id)
}

const todosResolver = {
    Query: {
        todos: findTodos
    },
    Mutation: {
        createTodo: createTodo,
        updateTodo: updateTodo
    }
}

export { todosResolver }