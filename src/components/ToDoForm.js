import React from 'react'

const ToDoForm = ( props ) => {
    
    const { formHandler, hasToDo } = props
    
    return (
        <div className="container todo-container">
            <form onSubmit={ formHandler }>
                <input type="text" placeholder="todo" id="new-todo" />
                { ! hasToDo ? <div className="error">Please enter a valid item</div> : null }
                <div className="row">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm