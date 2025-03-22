export const firePottery = (pottery, temperature) => {
    // add the fired property
    pottery.fired = true;

    // add the cracked property based on the temperature
    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }

    // returns object pottery with new property 
    return pottery;
}