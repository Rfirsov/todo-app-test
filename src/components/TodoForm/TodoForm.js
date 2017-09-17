import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class TodoForm extends Component {
	render() {
  	const { handleSubmit } = this.props;
  	return (
  	  <form onSubmit={ handleSubmit }>
  	  	<div>
  	  	  <label htmlFor="title">Title:<br/></label>
  	  	  <Field name="title" component="input" type="text" />
  	  	</div>
  	  	<div>
  	  	  <label htmlFor="description">Description:<br/></label>
  	  	  <Field name="description" component="input" type="text" />
  	  	</div>
  	  	<button type="submit">Submit</button>
  	  </form>
  	);
  }
}

export default reduxForm({
	form: 'todo',
	fields: ['title', 'description']
})(TodoForm);
