import {ADD_TASK, REMOVE_TASK} from '../variables';
const initialState = { tasks: ['First task'] };

const list = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task],
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task, id) => id !== action.payload.id ),
            }
        default:
            return state;
    }
};

export default list;
