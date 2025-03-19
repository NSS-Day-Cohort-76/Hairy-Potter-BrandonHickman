export function firePottery(pottery, temperature) {
    // add the fired property
    pottery.fired = true;

    // add the cracked property based on the temperature
    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }

    // return the modified pottery object
    return pottery;
}