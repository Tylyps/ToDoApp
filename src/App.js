import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plus from './templates/add.svg';
import {isEmpty} from 'lodash';

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
  addTask = () =>{
    const { value } = this.state
    return !isEmpty(value) && !this.props.tasks.includes(value) ? this.props.addTask(value) : null
  }

  onChangeInputHandler = event => this.setState({value: event.target.value})

  render() {
    const { value } = this.state;
    const { tasks } = this.props;

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
            buttonHandler={this.props.removeTask}
            buttonText={'Remove'}
            isListEmpty={isEmpty(tasks)}
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

