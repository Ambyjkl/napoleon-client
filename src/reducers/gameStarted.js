const gameStarted = (state = false, action) => {
    switch (action.type) {
        case "PREPARE_GAME": {
            return true;
        }
        default: {
            return state;
        }
    }
};

export default gameStarted;