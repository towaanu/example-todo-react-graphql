import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import TodosList from '../components/TodosList';
import AddTodoForm from '../components/AddTodoForm';
import { Todo, TodoInput } from '../types';

const GET_TODOS = gql`
    query Todos {
        todos {
            id
            label
            isDone
        }
    }
`

const ADD_TODO = gql`
    mutation AddTodo($todo: TodoInput!) {
        createTodo(todo: $todo) {
            id
            label
            isDone
        }
    }
`

function Todos() {

    const { data, loading, error } = useQuery<{ todos: Todo[] }>(GET_TODOS, {
        fetchPolicy: "cache-first"
    });

    const [addTodo] = useMutation<{ createTodo: Todo }, { todo: TodoInput }>(ADD_TODO, {
        update(cache, { data }) {
            if(!data || !data.createTodo){
                return;
            }

            const { createTodo } = data;
            cache.modify({
                fields: {
                    todos(cachedTodos = []) {
                        const newTodoRef = cache.writeFragment({
                            data: createTodo,
                            fragment: gql`
                                fragment NewTodo on Todo {
                                    id
                                    label
                                    isDone
                                }
                            ` 
                        });
                        return [...cachedTodos, newTodoRef];
                    }
                }
            })
        }
    });

    function handleNewTodo(label: string) {
        addTodo({
            variables: { todo: { label } }
        })
    }

    if (error) {
        return (<div>Error : {JSON.stringify(error)}</div>)
    }

    if (loading) {
        return (<div> Loading...</div>)
    }

    if (data) {
        return (
            <div>
                <TodosList todos={data.todos} />
                <AddTodoForm onSubmitForm={handleNewTodo} />
            </div>
        )
    }

    return null

}

export default Todos