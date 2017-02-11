import { combineReducers } from "redux";
import gameStarted from "./gameStarted";
import localState from "./localState";
import messages from "./messages";
import name from "./name";
import playerList from "./playerList";
import status from "./status";

const rootReducer = combineReducers({
    gameStarted,
    localState,
    messages,
    name,
    playerList,
    status
});

export default rootReducer;