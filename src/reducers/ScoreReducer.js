import { defaultScore } from "../GameHelper";

const initialState = {
    score: defaultScore,
};

const ScoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY SEED":
            return {
                ...state,
                score: state.score - action.payload,
            };
        case "SALE SEED":
            return {
                ...state,
                score: state.score + Number(action.payload),
            };
        default:
            return state;
    }
};

export default ScoreReducer;
