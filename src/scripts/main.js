// Imports go first
import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
const pottery1 = makePottery("Mug", 10, 8) 
console.log(pottery1);
const pottery2 = makePottery("Platter", 12, 9)
console.log(pottery2);
const pottery3 = makePottery("Vase", 15, 5)
console.log(pottery3);
const pottery4 = makePottery("Bowl", 4, 6)
console.log(pottery4);
const pottery5 = makePottery("Cup", 3, 5)
console.log(pottery5);


// Fire each piece of pottery in the kiln
firePottery(pottery1, 2400)
console.log(pottery1);
firePottery(pottery2, 2190)
console.log(pottery2);
firePottery(pottery3,1950)
console.log(pottery3);
firePottery(pottery4, 2121)
console.log(pottery4);
firePottery(pottery5, 2199)
console.log(pottery5);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

