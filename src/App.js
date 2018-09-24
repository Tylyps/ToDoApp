import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plus from './templates/add.svg';

import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';
import Counter from './components/Counter';
import { addTask, removeTask } from './store/actions/listActions';

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
    console.log(tasks);

    return (
      <div className="app">
        <Title text='ToDo App!!!' tag='h3'/>
        <div>
          <Input
            value={value}
            onChangeHandler={this.onChangeInputHandler}
            name={'taskInput'}
          />
          <Button
            onClickHandler={this.addTask}
            text={'Add'}
          ><img className='icon' src={Plus} alt='add'/></Button>
        </div>
        <div className="app__list">
          <List
            tab={tasks}
            classListName={'task-list'}
            classListItemName={'task-list__item'}
            classButtonName={'removeButton'}
            buttonHandler={this.removeTask}
            buttonText={'Remove'}
          />
        </div>
        <Counter/>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) => ({
    tasks: state.list.tasks,
})

const mapDispatchToProps = {
    addTask: addTask,
    removeTask: removeTask,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

