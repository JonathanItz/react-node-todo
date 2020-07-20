import React from 'react'

const TodoForm = ( props ) => {
    
    const { formHandler, hasToDo } = props
    
    return (
        <div className="container todo-container">
            <form onSubmit={ formHandler }>
                <input type="text" placeholder="todo" id="new-todo" />
                <div className="error">{ ! hasToDo ? `Please enter a valid item` : null }</div>
                <div className="row">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm