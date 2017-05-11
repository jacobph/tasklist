import React, { Component } from 'react';

class Completed extends Component {

  render() {
    if (this.props.tasks.length > 0) {
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
          <button
            className="btn btn-danger"
            onClick={this.props.handleClick}
          >
            Clear Completed Tasks 💩
          </button>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Completed;
