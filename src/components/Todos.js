import React from 'react'

import Todo from './Todo'

const Todos = ( props ) => {
    const { todos } = props
    
    return (
        <ul className="container">
            { todos.map( todo => <Todo key={ todo.id } todo={ todo.todo } /> ) }
        </ul>
    )
}

export default Todos