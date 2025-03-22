let potteryId = 1; // Variable to track the primary key for each piece of pottery

// Function to create a new piece of pottery
export function makePottery(shape, weight, height) {
    const pottery = {

        shape: shape,
        weight: weight,
        height: height,
        id: potteryId,
    };

    potteryId++; //Assigns the current pottery ID

    return pottery;
}