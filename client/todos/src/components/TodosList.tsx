import React from 'react';
import { Todo as TodoType } from '../types';
import Todo from './Todo';
import styles from './TodosList.module.css'

interface Props {
    todos: TodoType[]
    onToggleTodo: (todo: TodoType) => void
}


function TodosList({ todos, onToggleTodo }: Props) {

    return (
        <div className={styles['todos-list']}>
            {todos.map(todo => 
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    onToggleTodo={onToggleTodo} />
            )}
        </div>
    )
}

export default TodosList