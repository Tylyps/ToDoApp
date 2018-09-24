const initialState = { tasks: [] };

const listReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TASK':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                counter: state.counter * action.by,
            }
        default:
            return state;
    }
};

export default listReducer;
