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
    value: '',
  }
  addTask = () => Boolean(this.state.value.trimRight()) && !this.props.tasks.includes(this.state.value) ? this.props.addTask(this.state.value) : null

  onChangeInputHandler = event => this.setState({value: event.target.value})

  render() {
    const { value } = this.state;

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
            tab={this.props.tasks}
            classListName={'task-list'}
            classListItemName={'task-list__item'}
            classButtonName={'removeButton'}
            buttonHandler={this.props.removeTask}
            buttonText={'Remove'}
          />
        </div>
        <Counter/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    tasks: state.list.tasks,
})

const mapDispatchToProps = {
    addTask: addTask,
    removeTask: removeTask,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

