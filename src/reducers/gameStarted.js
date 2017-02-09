"use strict";

export const gameStarted = (state,action) => {
    switch(action.type) {
        case "PREPARE_GAME": {
            return true;
        }
        default : {
            return state;
        }
    }
};