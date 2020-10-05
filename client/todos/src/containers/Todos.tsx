import React from 'react';
import TodosList from '../components/TodosList';

const SAMPLE_TODOS = [
    { id: 1, label: "Do things", isDone: false },
    { id: 2, label: "Do another thing", isDone: false },
    { id: 3, label: "Cook something", isDone: true }
]

function Todos() {
    return <TodosList todos={SAMPLE_TODOS} />
}

export default Todos