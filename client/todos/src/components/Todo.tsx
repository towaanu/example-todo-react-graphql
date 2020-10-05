import React from 'react';
import { Todo as TodoType } from '../types';
import styles from './Todo.module.css';

interface Props {
    todo: TodoType
    onToggleTodo: (todo: TodoType) => void
}

function Todo({ todo, onToggleTodo }: Props) { 

    function handleToggleTodo() {
        onToggleTodo(todo);
    }

    return(
        <div className={styles['todo']}>
            <input type="checkbox" checked={todo.isDone} onChange={handleToggleTodo} />
            <div className={`${todo.isDone ? styles["is-done"] : ""}`}>{todo.label}</div>  
        </div>
    )
}

export default Todo