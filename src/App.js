import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    tasks: ['something'],
    value: '',
  }

  addTask = () => this.setState(( prevState ) => Boolean(prevState.value.trimRight()) && !prevState.tasks.includes(prevState.value) ? prevState.tasks.push(prevState.value) : null)

  removeTask = idToRemove => this.setState(( prevState ) => ({tasks: prevState.tasks.filter((task, id) => id !== idToRemove )}))

  onChangeInputHandler = event => this.setState({value: event.target.value})
  render() {
    const { tasks, value } = this.state

    return (
      <div className="app">
        <div className="title">ToDo App!</div>
        <div className="textInput-block">
          <label>Input task:</label>
          <input onChange={this.onChangeInputHandler} value={value}></input>
          <button onClick={this.addTask}>Add</button>
        </div>
        <div>
          <ul className="tasksList">
            {tasks.map((text, id) => <li className="task" key={id}>{text}<button className="removeButton" onClick={() => this.removeTask(id)}>Remove</button></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
