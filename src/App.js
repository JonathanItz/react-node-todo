import React from 'react';
import './sass/App.scss';

import Header from './components/Header'
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
			const lastIndex = prevState.todos.length - 1,
				  nextId = prevState.todos[ lastIndex ].id + 1
			
			document.querySelector('#new-todo').value = ''
			return prevState.todos.push( { id: nextId , todo: newToDo } )
		})
	}

	deleteTodo( e ) {
		const idToRemove = e.currentTarget.getAttribute('data-todo-id')
		
		const todoToRemove = ( { id } ) => id === idToRemove
		
		this.setState( prevState => {
			const removeMe = prevState.todos.findIndex( todoToRemove )
			return prevState.todos.splice( removeMe, 1 )
		})
	}

	render() {
		return (
			<div>
				<Header />
				<TodoForm formHandler={ this.todoFormHandler } hasToDo={ this.state.hasToDo } />
				<Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
			</div>
		)
	}
}

export default App;
