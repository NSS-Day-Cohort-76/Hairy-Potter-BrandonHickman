let potteryId = 0; //Initialize a variable to track the id of each pottery

export function makePottery(shape, weight, height) {
    potteryId++;

    return {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    };
}