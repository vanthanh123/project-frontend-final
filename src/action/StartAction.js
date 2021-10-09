export const startGame = (name) => {
    return{
        type: "START GAME",
        payload: name
    }
}

export const exitGame = () => {
    return{
        type: "EXIT GAME",
    }
}