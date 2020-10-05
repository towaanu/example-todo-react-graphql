import React from 'react';
import { Todo as TodoType } from '../types';

interface Props {
    todo: TodoType
}

function Todo({ todo }: Props) { 
    return(
        <li>{todo.label} - {todo.isDone ? "done" : "not done"}</li>
    )
}

export default Todo