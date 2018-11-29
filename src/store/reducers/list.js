import {ADD_TASK, REMOVE_TASK, LOAD_TASKS} from '../variables';
const initialState = { tasks: [] };

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
        case LOAD_TASKS:
            return {
                ...state,
                tasks: action.payload.tasks,
            }
        default:
            return state;
    }
};

export default list;
