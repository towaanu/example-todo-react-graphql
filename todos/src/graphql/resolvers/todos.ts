import { getRepository } from 'typeorm';
import { TodoInput } from './types';
import { Todo } from '../../db/entity';

function findTodos(): Promise<Todo[]> {
    return getRepository(Todo).find();
}

function createTodo(_root: any, args: { todo: TodoInput  }): Promise<Todo> {
    const { todo } = args;
    const todoRepo = getRepository(Todo);
    const newTodo = todoRepo.create(todo);
    return todoRepo.save(newTodo);
}

const todosResolver = {
    Query: {
        todos: findTodos
    },
    Mutation: {
        createTodo: createTodo
    }
}

export { todosResolver }