import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.listIndex);
  }

  render() {
    return (
      <li className="list-group-item">
        <span>{this.props.task}</span>
        <button 
          className="btn btn-success"
          onClick={this.handleClick}
        >Complete ✔</button>
      </li>
    );
  }
}

export default ListItem;
