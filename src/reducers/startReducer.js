const initialState = {
    start: 0,
    name: 'thuong',
}

const startReducer = (state = initialState,action) => {
    switch (action.type) {
        case "START GAME" :
            return {
                ...state, start: 1, name: action.payload
            };
            case "EXIT GAME" :
            return {
                ...state, start: 0
            };
            default :
            return state;
    }
}

export default startReducer;
