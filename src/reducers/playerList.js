const playerList = (state = [], action) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
};

export default playerList;