import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import datailReducer from "./datailReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: datailReducer,
});

export default rootReducer;