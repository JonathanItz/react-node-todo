import React from 'react'
import ReactDOM from 'react-dom'

import Todo from './Todo'

export default class Todos extends React.Component {
    render() {        
        const { todos } = this.props
        console.log(todos);
        

        return (
            <ul className="container">
                { todos.map( todo => <Todo key={ todo.id } todo={ todo.todo } /> ) }
            </ul>
        )
    }
}