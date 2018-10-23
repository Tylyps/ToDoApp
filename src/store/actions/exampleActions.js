import {ADD_ACTION, MULTIPLY_ACTION} from '../variables';
export const addAction = () => ({
    type: ADD_ACTION
});

export const multiplyAction = by => ({
    type: MULTIPLY_ACTION,
    payload: {
        by
    }
});
