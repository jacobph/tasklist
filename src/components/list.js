import React, { Component } from 'react';
import ListItem from './listitem';

class List extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.handleClick(index);
  }

  render() {
    const tasks = this.props.tasks.map((task, i) => {
      return (
        <ListItem key={i} 
          listIndex={i}
          task={task}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <ul className="list-group">
        {tasks}
      </ul>
    );
  }
}

export default List;
