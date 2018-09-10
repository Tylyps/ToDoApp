import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    tasks: ['something'],
    value: '',
  }

  addTask = () => this.setState(() => !!this.state.value.trimRight() && !this.state.tasks.includes(this.state.value) ? this.state.tasks.push(this.state.value) : null)

  removeTask = idToRemove => this.setState({tasks: this.state.tasks.filter((task, id) => id !== idToRemove )})

  render() {
    return (
      <div className="app">
        <div className="title">ToDo App!</div>
        <div className="textInput-block">
          <label>Input task:</label>
          <input onChange={ key => this.setState({value: key.target.value})} value={this.state.value}></input>
          <button onClick={() => this.addTask()}>Add</button>
        </div>
        <div>
          <ul className="tasksList">
            {this.state.tasks.map((text, id) => <li className="task" key={id}>{text}<button className="removeButton" onClick={() => this.removeTask(id)}>Remove</button></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
