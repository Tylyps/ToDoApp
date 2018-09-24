import {add_action, multiply_action} from '../variables';
export const addAction = () => ({
    type: add_action
});

export const multiplyAction = by => ({
    type: multiply_action,
    by
});
