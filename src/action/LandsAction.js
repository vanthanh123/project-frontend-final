export const seedLevel2 = (i)=>{
    return {
        type: "seedLevel 2",
        payload: "/images/step2.png",
        i:i,
    }
}

export const seedLevel3 = (i,image)=>{
    return {
        type: "seedLevel 3",
        payload: image,
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

export const actionCountCrop = (i) => {
    return {
        type: "countCrop",
        i: i,
    }
}

export const removeSeed = (i) => {
    return {
        type: "removeSeed",
        i: i,
    }
}


export const droopy = (i) => {
    return {
        type: "droopy",
        image: "/images/droopy.png",
        i: i
    }
}

export const isDroopy = (i) => {
    return {
        type: "isDroopy",
        i: i,
    }
}
