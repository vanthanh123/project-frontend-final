import SeedsReducer from "./seedsReducer";
import LandsReducer from "./landsReducer";
import ScoreReducer from "./scoreReducer";
import startReducer from "./startReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    Seeds: SeedsReducer,
    Lands: LandsReducer,
    Score: ScoreReducer,
    Start: startReducer,
});

export default rootReducer;