import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem.js';

class TodoGrid extends Component {
	render() {
		const { todos }  = this.props;
		return (
			<div className="todoGrid">
				{todos.sort((a, b) => b.id - a.id).map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
            />
          );
        })
        }
			</div>
		);
	}
}

export default TodoGrid;