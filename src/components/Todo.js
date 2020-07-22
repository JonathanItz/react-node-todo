import React from 'react'

import Delete from '../images/delete.svg'

const Todo = ( { todo, id, deleteTodo } ) => {
    return <li className="todo">{ todo }<img data-todo-id={ id } alt="remove todo" className="delete" src={ Delete } onClick={ deleteTodo } /></li>
}

export default Todo