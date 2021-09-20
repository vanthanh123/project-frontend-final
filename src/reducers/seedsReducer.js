const initialState = {
    seed:{
        time: 12312,
        url: "",
        ishow: '',
        giatien:'',
    }
}

const seedsReducer = (state = initialState,action) => {
    switch (action.type) {
        case "createSeed" :
            return state;
            default :
            return state;
    }
}

export default seedsReducer;
