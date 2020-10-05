import React from 'react';
import { Todo as TodoType } from '../types';
import Todo from './Todo';

interface Props {
    todos: TodoType[]
    onToggleTodo: (todo: TodoType) => void
}

function TodosList({ todos, onToggleTodo }: Props) {

    return (
    <ul>
            {todos.map(todo => 
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    onToggleTodo={onToggleTodo} />
            )}
    </ul>
    )
}

export default TodosList