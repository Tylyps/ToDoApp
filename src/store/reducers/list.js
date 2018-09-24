const initialState = { tasks: [] };

const list = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload.value]
            }
        case 'REMOVE_TASK':
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default list;
