const initialState = {
    url: "",
    score: 3000,
};

const LandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "step 2":
            return {
                ...state,
                url: action.payload,
            };
        case "step 3":
            return {
                ...state,
                url: action.payload,
            };
            case "score":
            return {
                ...state,
                score: (state.score + action.score),
                url: action.url
            };
        default:
            return state;
    }
};

export default LandsReducer;
