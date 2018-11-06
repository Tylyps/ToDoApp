import {ADD_TASK, REMOVE_TASK, SAVE} from '../variables';
const initialState = JSON.parse(localStorage.getItem('list')) || { tasks: [] };

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
        case SAVE:
            localStorage.setItem('list',JSON.stringify(state))
            return {...state}
        default:
            return state;
    }
};

export default list;
