//tạo giá trị khởi tạo là một mảng rồi 24 giá trị tương ứng với 24 ô đất, cố giá trị mặc định isGrow là false
const initialState = {
    lands: Array(24).fill({ isGrow: false }),
};

//hàm thực thi các action của land
const LandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "grow":
            //trả về một mảng là mảng được sửa đổi bằng phương thức fill
            return {
                lands: [
                    ...state.lands.fill(action.payload, action.i, action.i + 1),
                ],
            };
        case "seedLevel 2":
            //tạo một hạt giống lv2
            const newSeedLevel2 = {
                ...state.lands[action.i],
                image: action.payload,
                level: 2,
            };
            //trả về mảng lands được sửa đổi thêm vào hạt giống lv2
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
            //trả về mảng lands được sửa lại thuộc tính countCrop bằng phương thức fill
            return {
                lands: [
                    ...state.lands.fill(
                        {
                            //sử dụng tính năng Spread của es6
                            ...state.lands[action.i],
                            countCrop: state.lands[action.i].countCrop + 1,
                        },
                        action.i,
                        action.i + 1
                    ),
                ],
            };
        case "removeSeed":
            return {
                lands: [
                    ...state.lands.fill(
                        { isGrow: false },
                        action.i,
                        action.i + 1
                    ),
                ],
            };
        case "droopy":
            const setDroopy = {
                ...state.lands[action.i],
                image: action.image,
            };
            return {
                lands: [...state.lands.fill(setDroopy, action.i, action.i + 1)],
            };
        case "isDroopy":
            const setIsDroopy = {
                ...state.lands[action.i],
                isDrooy: !state.lands[action.i].isDrooy,
            };
            return {
                lands: [...state.lands.fill(setIsDroopy, action.i, action.i + 1)],
            };
        default:
            return state;
    }
};

export default LandsReducer;
