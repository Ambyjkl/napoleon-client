"use strict";

export const status = (state, action) => {
    switch (action.type) {
        case "UPDATE_STATUS":
            return action.data;
        default:
            return state;
    }
};

export const log = (state, action) => {
    switch (action.type) {
        case "UPDATE_LOG":
            return action.data;
        default:
            return state;
    }
}