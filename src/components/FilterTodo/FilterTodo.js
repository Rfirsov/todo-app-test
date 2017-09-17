import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchByTitle, searchByDate } from '../../actions/todosActions.js';


class FilterTodo extends Component {
	constructor(props) {
		super(props);
			this.state = {
				title: '',
				date: ''
			};	
	}

	handleChange = (e) => {
    this.setState({
    	[e.target.name]: e.target.value
    });
  }

  handleClick = () => {
  	const { searchByTitle, searchByDate } = this.props;
  	const { title, date } = this.state;
  	searchByTitle(title);
  	searchByDate(date);
  }

	render() {
		const { todos } = this.props;
		console.log(todos);
		return (
			<div className="filterTodo">
				<h3>Filter by:</h3>
				<form>
					<div>
						<label htmlFor="title">Title:<br/></label>
						<input 
							type="text"
							name="title"
							value={this.state.title} 
							onChange={this.handleChange} 
						/>	
					</div>
					<div>
						<label htmlFor="date">Date:<br/></label>
						<input 
							type="date"
							name="date"
							value={this.state.date} 
							onChange={this.handleChange} 
						/>
					</div>
				</form>
					<button onClick={this.handleClick}>Find</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	searchByTitle: (searchTitle) => dispatch(searchByTitle(searchTitle)),
  	searchByDate: (searchDate) => dispatch(searchByDate(searchDate))
  }
}


export default connect(null, mapDispatchToProps)(FilterTodo);