export const addTask = () => ({
    type: 'ADD_TASK'
});

export const removeTask = by => ({
    type: 'REMOVE_TASK',
    by
});
