import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import { getTodos, addTodos } from '../../actions/todosActions.js';

import TodoForm from '../TodoForm/TodoForm.js';

class AddTodo extends Component {
	constructor(props) {
		super(props);

		let { todo, initializeTodo } = this.props;	
		initializeTodo(todo);
	}

	componentDidMount() {
		this.props.getTodos();
	}

  handleSubmit = (values) => {
  	const { addTodos, todos } = this.props;
    let id = Math.max.apply(Math, todos.map(todo => todo.id));
    let date = new Date().toJSON().substring(0,19);
		addTodos(values, id, date);
  }

  render() {
    return (
    	<div className="addTodo">
    		<h1>Add new Todo item</h1>
	      <TodoForm onSubmit={this.handleSubmit} />
    	</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	getTodos: () => dispatch(getTodos()),
  	addTodos: (values, id, date) => dispatch(addTodos(values, id, date)),
    initializeTodo: (todo) => dispatch(initialize('todo', todo))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);