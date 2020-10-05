import React from 'react';
import { Todo as TodoType } from '../types';

interface Props {
    todo: TodoType
    onToggleTodo: (todo: TodoType) => void
}

function Todo({ todo, onToggleTodo }: Props) { 

    function handleToggleTodo() {
        onToggleTodo(todo);
    }

    return(
        <li>{todo.label}  <input type="checkbox" checked={todo.isDone} onChange={handleToggleTodo} /> </li>
    )
}

export default Todo