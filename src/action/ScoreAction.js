export const buySeed = (score) => {
    return {
        type: "BUY SEED",
        payload: score,
    }
}

export const saleSeed = (score) => {
    return {
        type: "SALE SEED",
        payload: score,
    }
}