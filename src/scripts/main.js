// Imports go first
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { makePottery } from "./PotteryWheel.js"
import { PotteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
const pottery = makePottery("Mug", 10, 8) 
console.log(pottery);
const pottery2 = makePottery("Platter", 12, 9)
console.log(pottery2);
const pottery3 = makePottery("Vase", 15, 5)
console.log(pottery3);
const pottery4 = makePottery("Bowl", 4, 6)
console.log(pottery4);
const pottery5 = makePottery("Cup", 3, 5)
console.log(pottery5);


// Fire each piece of pottery in the kiln
firePottery(pottery, 2000)
firePottery(pottery2, 2190)
firePottery(pottery3, 1950)
firePottery(pottery4, 2121)
firePottery(pottery5, 2199)


console.log(pottery);
console.log(pottery2);
console.log(pottery3);
console.log(pottery4);
console.log(pottery5);

// Determine which ones should be sold, and their price
toSellOrNotToSell(pottery)
toSellOrNotToSell(pottery2)
toSellOrNotToSell(pottery3)
toSellOrNotToSell(pottery4)
toSellOrNotToSell(pottery5)

console.log(pottery);
console.log(pottery2);
console.log(pottery3);
console.log(pottery4);
console.log(pottery5);

// Invoke the component function that renders the HTML list

const potteryContainer = document.querySelector(".potteryList");
potteryContainer.innerHTML = PotteryList(); // Renders the potteryList