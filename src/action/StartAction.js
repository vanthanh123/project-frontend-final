export const startGame = (name) => {
    return{
        type: "START GAME",
        payload: name
    }
}