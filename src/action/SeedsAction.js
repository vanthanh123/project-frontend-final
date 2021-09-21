export const createSeed = (newSeed) => {
    return{
        type: "CREATE SEED",
        payload: newSeed,
    }
}