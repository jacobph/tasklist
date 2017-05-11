import React, { Component } from 'react';
import logo from './logo2.svg';
import List from './components/list';
import Form from './components/form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
    const fromLocal = localStorage.getItem('state');
    if (fromLocal) {
      this.state = (JSON.parse(fromLocal));
    } else {
      this.state = {
        tasks: ['feed the cat', 'take out the trash', 'do the laundry', 'shop for groceries'],
        newTask: '',
      };
    }
  }

  // sync the state to localStorage whenever  
  componentDidUpdate(prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);
  }

  handleSubmit(val) {  
    this.setState({
      tasks: this.state.tasks.concat([val]),
    });
  }

  removeTask(index) {
    const tasks = this.state.tasks.slice(0,index).concat(this.state.tasks.slice(index + 1));
    this.setState({
      tasks: tasks,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 header-content">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Todoodle</h2>
              </div>
            </div>
          </div>
          
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Form
                handleSubmit={this.handleSubmit}
              />
            </div>
            <div className="col-sm-6">
              <List 
                tasks={this.state.tasks}
                handleClick={this.removeTask}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
