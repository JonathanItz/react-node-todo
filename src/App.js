import React from 'react';
import './sass/App.scss';

import ToDoForm from './components/ToDoForm'


class App extends React.Component {

	constructor(props) {
		super(props)
		this.formHandler = this.formHandler.bind(this)

		this.state = {
			hasToDo: true
		}
	}

	formHandler(e) {
		e.preventDefault()
		const newToDo = document.querySelector('#new-todo').value

		if (newToDo === '') {
			this.setState({ hasToDo: false })
			return
		}
		if (this.state.hasToDo === false) this.setState({ hasToDo: true })

		console.log('were good');
	}

	render() {
		return (
			<div>
				<div className="container header">
					Header
        		</div>
				<ToDoForm formHandler={this.formHandler} hasToDo={this.state.hasToDo} />
			</div>
		)
	}
}

export default App;
