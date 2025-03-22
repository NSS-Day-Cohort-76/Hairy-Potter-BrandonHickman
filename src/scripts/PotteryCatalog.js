const potteryToSell = [];

export const toSellOrNotToSell = (pottery) => {
    // If the pottery is cracked, don't add it
    if (pottery.cracked) {
        return pottery;
    }

    // If the weight is greater than or equal to 6, set price to 40
    if (pottery.weight >= 6) {
        pottery.price = 40;
    }
    // if the weight is less than 6, set price to 20
    else {
        pottery.price = 20;
    }

    // add the pottery to the potteryToSell array
    potteryToSell.push(pottery);

    // return the modified pottery object
    return pottery;
}

export function usePottery() {
    // return a deep copy of the array of items to be sold
    return structuredClone(potteryToSell)
}