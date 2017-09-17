import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoItem } from '../../actions/todosActions.js';

class TodoItem extends Component {

	handleClick = () => {
		let removeId = this.props.todo.id;
		this.props.deleteTodoItem(removeId);
	}

	render() {
		const { todo } =	this.props;
		let createdDate = todo.created_at;
		let convertDate = new Date(createdDate).toLocaleString("uk-UA");
		return (
			<div className="todoItem">
				<div className="title-container">
					<h2>{todo.title}</h2>
					<button onClick={this.handleClick}>X</button>
				</div>
				<p className="description">{todo.description}</p>
				<p>Added: {convertDate}</p>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	deleteTodoItem: (id) => dispatch(deleteTodoItem(id))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);