const initialState = {
    seed:{
        id: '',
        name: "SEED",
        image: "/images/seed_default.png",
        price: 0,
        timeLevelUp: 0,
        isGrow: false,
        level:1,
        countCrop:0,
        imageStep3:"",
        isDroopy:false,
    }
}

const SeedsReducer = (state = initialState,action) => {
    switch (action.type) {
        case "CREATE SEED" :
            return {
                ...state, seed: action.payload
            };
            default :
            return state;
    }
}

export default SeedsReducer;
