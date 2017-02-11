const messages = (state = [], action) => {
    switch (action.type) {
        case "NEW_MESSAGE":
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
};

export default messages;