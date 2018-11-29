import {ADD_TASK, REMOVE_TASK, LOAD_TASKS, TASKS} from '../variables';
import { saveToLocalStorage, loadFromLocalStorage } from '../../helper/localstorage';

export const loadTasks = (tasks = []) => ({
    type: LOAD_TASKS,
    payload: {
        tasks,
    }
});


export const startLoadTasks = () => (
    (dispach) => {
        const tasks = loadFromLocalStorage(TASKS)
        dispach(loadTasks(tasks));
    }
);

export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        task,
    }
});


export const startAddTask = task => (
    (dispach, getState) => {
        const { tasks } = getState().list
        saveToLocalStorage(TASKS, [...tasks, task]);
        dispach(addTask(task));
    }
);

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: {
        id,
    }
});

export const startRemoveTask = id => (
    (dispach) => {
        const tasks = loadFromLocalStorage(TASKS).filter((task, taskId) => taskId !== id );
        saveToLocalStorage(TASKS, tasks);
        dispach(removeTask(id));
    }
);
