import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TodosList from '../components/TodosList';
import { Todo } from '../types';

const GET_TODOS = gql`
    query Todos {
        todos {
            id
            label
            isDone
        }
    }
`

function Todos() {

    const { data, loading, error } = useQuery<{ todos: Todo[] }>(GET_TODOS);

    if (error) {
        return (<div>Error : {JSON.stringify(error)}</div>)
    }

    if (loading) {
        return (<div> Loading...</div>)
    }

    if (data) {
        return (<TodosList todos={data.todos} />)
    }

    return null

}

export default Todos