import React from 'react';
import { Todo as TodoType } from '../types';
import Todo from './Todo';

interface Props {
    todos: TodoType[]
}

function TodosList({ todos }: Props) {
    return (
    <ul>
            {todos.map(todo => 
                <Todo key={todo.id} todo={todo} />
            )}
    </ul>
    )
}

export default TodosList