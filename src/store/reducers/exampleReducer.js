const initialState = { counter: 0 };

const exampleReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ACTION':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'MULTIPLY_ACTION':
            return {
                ...state,
                counter: state.counter * action.by,
            }
        default:
            return state;
    }
};

export default exampleReducer;
