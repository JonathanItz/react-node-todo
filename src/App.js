import React from 'react';
import './sass/App.scss';

import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.formHandler = this.formHandler.bind(this)

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

	formHandler(e) {
		e.preventDefault()
		const newToDo = document.querySelector('#new-todo').value

		if (newToDo === '') {
			if ( this.state.hasToDo === true ) this.setState({ hasToDo: false })
			return
		}
		if ( this.state.hasToDo === false ) this.setState({ hasToDo: true })

		console.log('were good');
	}

	render() {
		return (
			<div>
				<div className="container header">
					Header
        		</div>
				<TodoForm formHandler={this.formHandler} hasToDo={this.state.hasToDo} />
				<Todos todos={ this.state.todos } />
			</div>
		)
	}
}

export default App;
