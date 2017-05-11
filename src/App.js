import React, { Component } from 'react';
import logo from './logo2.svg';
import List from './components/list';
import Form from './components/form';
import Completed from './components/completed';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    
    const fromLocal = localStorage.getItem('state');
    if (fromLocal) {
      this.state = (JSON.parse(fromLocal));
    } else {
      this.state = {
        tasks: [
          'A demo task to get you started',
          'Click "Complete" to clear these, then add your own'
        ],
        completed: []
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
    const completed = this.state.completed.concat([this.state.tasks[index]]);
    this.setState({
      tasks: tasks,
      completed: completed,
    });
  }

  clearCompleted(){
    this.setState({
      completed: [],
    })
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
          <div className="row">
            <div className="col-sm-6 col-sm-offset-6">
              <Completed 
                tasks={this.state.completed}
                handleClick={this.clearCompleted}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
