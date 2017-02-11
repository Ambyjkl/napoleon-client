const name = (state = "", action) => {
    switch (action.type) {
        case "NAME":
            return action.data;
        default:
            return state;
    }
};

export default name;