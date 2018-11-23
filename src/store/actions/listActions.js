import {ADD_TASK, REMOVE_TASK, LOAD_TASKS} from '../variables';

export const loadTasks = (tasks = []) => ({
    type: LOAD_TASKS,
    payload: {
        tasks,
    }
});


export const startLoadTasks = () => (
    (dispach) => {
        if(localStorage) {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            dispach(loadTasks(tasks));
        }
    }
)

export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        task,
    }
});


export const startAddTask = task => (
    (dispach, getState) => {
        const { tasks } = getState().list
        if(localStorage) {
            localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
        }
        dispach(addTask(task));
    }
)

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: {
        id,
    }
});

export const startRemoveTask = id => (
    (dispach, getState) => {
        const tasks = getState().list.tasks.filter((task, taskId) => taskId !== id );
        if(localStorage) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        dispach(removeTask(id))
    }
)
