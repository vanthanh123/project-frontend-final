import SeedsReducer from "./seedsReducer";
import LandsReducer from "./landsReducer";
import ScoreReducer from "./ScoreReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    Seeds: SeedsReducer,
    Lands: LandsReducer,
    Score: ScoreReducer,
});

export default rootReducer;