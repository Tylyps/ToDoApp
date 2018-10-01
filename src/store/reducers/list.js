import {ADD_TASK, REMOVE_TASK} from '../variables';
const initialState = { tasks: ['First task'] };

const list = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task]
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, action.payload.id),
                    ...state.tasks.slice(action.payload.id + 1)
                ]
            }
        default:
            return state;
    }
};

export default list;
