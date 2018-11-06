import {ADD_TASK, REMOVE_TASK, SAVE} from '../variables';

export const addTaskAsync = task => ({
    type: ADD_TASK,
    payload: {
        task,
    }
});

const saveTasks = () => ({
    type: SAVE,
});

export const addTask = task => (
    dispach => {
        dispach(addTaskAsync(task))
        setTimeout(() => {
            dispach(saveTasks())
        }, 500)
    }
)

export const removeTaskAsync = id => ({
    type: REMOVE_TASK,
    payload: {
        id,
    }
});

export const removeTask = id => (
    dispach => {
        dispach(removeTaskAsync(id))
        setTimeout(() => {
            dispach(saveTasks())
        }, 500)
    }
)
