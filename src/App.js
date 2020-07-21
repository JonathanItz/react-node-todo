import React from 'react';
import './sass/App.scss';

import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

class App extends React.Component {

	constructor( props ) {
		super( props )
		this.todoFormHandler = this.todoFormHandler.bind(this)

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
			return prevState.todos.push( { id: 100, todo: newToDo } )
		})
	}

	render() {
		return (
			<div>
				<div className="container header">
					Header
        		</div>
				<TodoForm formHandler={ this.todoFormHandler } hasToDo={ this.state.hasToDo } />
				<Todos todos={ this.state.todos } />
			</div>
		)
	}
}

export default App;
