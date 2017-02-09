import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";
import * as reducers from "./reducers";

const appReducer = combineReducers(reducers);
const initialState = {
    gameStarted: false,
    messages: [],
    name: "",
    playerList: [],
    status: Object,
    log: []
};

const socket = io("localhost:1808");
const socketIoMiddleware = createSocketIoMiddleware(socket, "s/");

const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(socketIoMiddleware)
);

export default store;