import React from 'react'

import Todo from './Todo'

const Todos = ( { todos, deleteTodo } ) => {
    return (
        <ul className="container todos">
            { todos.map( todo => <Todo
                                    key={ todo.id }
                                    id={ todo.id }
                                    todo={ todo.todo }
                                    deleteTodo={ deleteTodo }
                                /> )}
        </ul>
    )
}

export default Todos