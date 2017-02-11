const localState = (state = null, action) => {
    switch (action.type) {
        case "RESET_LOCAL_STATE": {
            return {
                targetPlayer: null,
                targetCard: {
                    value: null,
                    suit: null
                }
            };
        }
        case "SET_TARGET_PLAYER": {
            return {
                ...state,
                targetPlayer: action.data
            };
        }
        case "SET_TARGET_CARD_VALUE": {
            return {
                ...state,
                targetCard: {
                    ...state.targetCard,
                    value: action.data
                }
            };
        }
        case "SET_TARGET_CARD_SUIT": {
            return {
                ...state,
                targetCard: {
                    ...state.targetCard,
                    suit: action.data
                }
            };
        }
        default:
            return state;
    }
};

export default localState;