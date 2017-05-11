import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(e.target.querySelector('input').value);
		e.target.querySelector('input').value = '';
	}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<label htmlFor="taskInput">New Task</label>
      	<div className="form-group">
	      	<input 
	      		name="taskInput"
	      		className="form-control"
	      		type="text" 
	      	/>
	      	<button className="btn btn-primary">Submit ➡</button>
	      </div>
      </form>
    );
  }

}

export default Form;
