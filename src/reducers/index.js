import SeedsReducer from "./SeedsReducer";
import LandsReducer from "./LandsReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    Seeds: SeedsReducer,
    Lands: LandsReducer,
});

export default rootReducer;