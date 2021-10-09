import SeedsReducer from "./SeedsReducer";
import LandsReducer from "./LandsReducer";
import ScoreReducer from "./ScoreReducer";
import startReducer from "./StartReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    Seeds: SeedsReducer,
    Lands: LandsReducer,
    Score: ScoreReducer,
    Start: startReducer,
});

export default rootReducer;