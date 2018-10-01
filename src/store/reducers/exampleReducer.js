import {ADD_ACTION, MULTIPLY_ACTION} from '../variables';
const initialState = { counter: 0 };

const exampleReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ACTION:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case MULTIPLY_ACTION:
            return {
                ...state,
                counter: state.counter * action.payload.by,
            }
        default:
            return state;
    }
};

export default exampleReducer;
