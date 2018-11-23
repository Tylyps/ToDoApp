import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plus from './templates/add.svg';
import { isEmpty } from 'lodash';
import classNames from 'classnames';

import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';
import Counter from './components/Counter';
import { startAddTask, startRemoveTask, startLoadTasks } from './store/actions/listActions';

class App extends Component {
  state = {
    value: '',
    isInputEmpty: false,
    isValueExist: false,
  };

  componentDidMount = () => {
    this.props.startLoadTasks()
  }

  addTask = () =>{
    const { value } = this.state;
    const { tasks, startAddTask } = this.props;
    if (isEmpty(value)) {
      this.setState({ isInputEmpty: true })
      return null;
    } else if (tasks.includes(value)) {
      this.setState({ isValueExist: true })
      return null;
    } else {
      this.setState({ isInputEmpty: false, isValueExist: false })
      return startAddTask(value);
    }
  };

  onChangeInputHandler = event => this.setState({ value: event.target.value });

  render() {
    const {
      value,
      isInputEmpty,
      isValueExist,
    } = this.state;
    const { tasks, startRemoveTask } = this.props;
    const inputClassName = classNames({ input: true, 'is-empty': isInputEmpty, 'is-exist': isValueExist });
    return (
      <div className="app">
        <Title text='ToDo App!!!' tag='h3'/>
        <div>
          <Input
            value={value}
            onChangeHandler={this.onChangeInputHandler}
            name={'taskInput'}
            className={inputClassName}
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
            buttonHandler={startRemoveTask}
            buttonText={'Remove'}
            isListEmpty={isEmpty(tasks)}
          />
        </div>
        <Counter/>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
    tasks: state.list.tasks,
});

const mapDispatchToProps = {
    startAddTask: startAddTask,
    startRemoveTask: startRemoveTask,
    startLoadTasks: startLoadTasks,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

