import React from 'react';
import './sass/App.scss';

import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

class App extends React.Component {

	constructor( props ) {
		super( props )
		this.todoFormHandler = this.todoFormHandler.bind( this )
		this.deleteTodo 	 = this.deleteTodo.bind( this )

		this.state = {
			hasToDo: true,
			todos: [
				{
					id: 1,
					todo: 'Make app'
				},
				{
					id: 2,
					todo: 'Cook'
				},
				{
					id: 3,
					todo: 'Go Shopping'
				},
				{
					id: 4,
					todo: 'Eat food'
				}
			]
		}
	}

	todoFormHandler( e ) {
		e.preventDefault()
		const newToDo = document.querySelector('#new-todo').value

		if (newToDo === '') {
			if ( this.state.hasToDo === true ) this.setState({ hasToDo: false })
			return
		}
		if ( this.state.hasToDo === false ) this.setState({ hasToDo: true })

		this.setState( ( prevState ) => {
			const nextId = ++prevState.todos.length

			return prevState.todos.push( { id: nextId , todo: newToDo } )
		})
	}

	deleteTodo( e ) {
		const idToRemove = e.currentTarget.getAttribute('data-todo-id')
	}

	render() {
		return (
			<div>
				<div className="container header">
					Header
        		</div>
				<TodoForm formHandler={ this.todoFormHandler } hasToDo={ this.state.hasToDo } />
				<Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
			</div>
		)
	}
}

export default App;
