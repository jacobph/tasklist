import React, { Component } from 'react';
// import ListItem from './listitem';

class Completed extends Component {
  // constructor(props) {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(index) {
  //   this.props.handleClick(index);
  // }

  render() {
    const tasks = this.props.tasks.map((task, i) => {
      return(
        <li key={i} className="list-group-item list-group-item-success"><s>{task}</s></li>
      )
    });
    return (
      <div>
        <h2>Completed Tasks:</h2>
        <ul className="list-group">
          {tasks}
        </ul>
        <button className="btn btn-danger" onClick={this.props.handleClick}>Clear Completed Tasks</button>
      </div>
    )
  }
}

export default Completed;
