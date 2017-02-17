import { createStore, applyMiddleware } from "redux";
import createSocketIoMiddleware from "redux-socket.io";
// import thunk from "redux-thunk";
import io from "socket.io-client";
import rootReducer from "../reducers/index";

const initialState = {
    gameStarted: false,
    messages: [],
    name: "",
    playerList: [],
    status: null,
    localState: {
        targetPlayer: null,
        targetCard: {
            value: null,
            suit: null
        }
    }
};

const socket = io("localhost:1808");
const socketIoMiddleware = createSocketIoMiddleware(socket, "s/");

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(thunk),
    applyMiddleware(socketIoMiddleware)
);

export default store;