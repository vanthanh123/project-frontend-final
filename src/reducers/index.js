import SeedsReducer from "./SeedsReducer";
import LandsReducer from "./LandsReducer";
import ScoreReducer from "./ScoreReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    Seeds: SeedsReducer,
    Lands: LandsReducer,
    Score: ScoreReducer,
});

export default rootReducer;