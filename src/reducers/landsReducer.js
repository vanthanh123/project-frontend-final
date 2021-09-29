const initialState = {
    lands: Array(24).fill({ isGrow: false }),
};

const LandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "grow":
            return {
                lands: [
                    ...state.lands.fill(action.payload, action.i, action.i + 1),
                ],
            };
        case "seedLevel 2":
            const newSeedLevel2 = {
                ...state.lands[action.i],
                image: action.payload,
                level: 2,
            };
            return {
                lands: [
                    ...state.lands.fill(newSeedLevel2, action.i, action.i + 1),
                ],
            };
        case "seedLevel 3":
            const newSeedLevel3 = {
                ...state.lands[action.i],
                image: action.payload,
                level: 3,
            };
            return {
                lands: [
                    ...state.lands.fill(newSeedLevel3, action.i, action.i + 1),
                ],
            };
        case "countCrop":
            const newSeedCrop = {
                ...state.lands[action.i],
                countCrop: state.lands[action.i].countCrop + 1,
            };
            return {
                lands: [
                    ...state.lands.fill(newSeedCrop, action.i, action.i + 1),
                ],
            };
        case "removeSeed":
            return {
                lands: [
                    ...state.lands.fill({ isGrow: false}, action.i, action.i + 1)
                ]
            };
        case "countDroopy":
            const setCountDroopy = {
                ...state.lands[action.i],
                countDroopy: (state.lands[action.i].countDroopy + 1),
            };
            return {
                lands: [
                    ...state.lands.fill(setCountDroopy, action.i, action.i + 1),
                ],
            };
        default:
            return state;
    }
};

// lands:[...state.lands,action.payload]

export default LandsReducer;
