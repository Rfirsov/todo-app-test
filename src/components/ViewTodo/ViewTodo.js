import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterTodo from '../FilterTodo/FilterTodo.js';
import TodoGrid from '../TodoGrid/TodoGrid.js';

class ViewTodo extends Component {
  render() {
    const { todos } = this.props;
    if (!todos.length) {
      return <p>Sorry! Error loading Todo items</p>; 
    };

    return (
      <div className="viewTodo">
        <FilterTodo todos={todos} />
        <TodoGrid todos={todos} />
    	</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(ViewTodo);