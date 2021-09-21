export const seedLevel2 = (i)=>{
    return {
        type: "seedLevel 2",
        payload: "/images/step2.png",
        i:i,
    }
}

export const seedLevel3 = (i)=>{
    return {
        type: "seedLevel 3",
        payload: "/images/step3.png",
        i:i,
    }
}

export const grow = (seedGrow,i) => {
    return {
        type: "grow",
        payload: seedGrow,
        i: i,
    }
}