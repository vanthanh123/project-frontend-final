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
            const seedCurrent = state.lands[action.i];
            const newSeedLevel2 = {
                ...seedCurrent,
                image: action.payload,
                level: 2,
            };
            return {
                lands: [
                    ...state.lands.fill(newSeedLevel2, action.i, action.i + 1),
                ],
            };
        case "seedLevel 3":
            const seedCurrent2 = state.lands[action.i];
            const newSeedLevel3 = {
                ...seedCurrent2,
                image: action.payload,
                level: 3,
            };
            return {
                lands: [
                    ...state.lands.fill(newSeedLevel3, action.i, action.i + 1),
                ],
            };

        default:
            return state;
    }
};

// lands:[...state.lands,action.payload]

export default LandsReducer;
