const initialState = {
    seed:{
        id: '',
        name: "SEED",
        image: "/images/apple_seed.png",
        price: 0,
        timeLevelUp: 0,
        isGrow: false,
        level:1,
    }
}

const seedsReducer = (state = initialState,action) => {
    switch (action.type) {
        case "CREATE SEED" :
            return {
                ...state, seed: action.payload
            };
            default :
            return state;
    }
}

export default seedsReducer;
