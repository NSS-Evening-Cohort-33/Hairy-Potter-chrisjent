// Imports go first
const {makePottery} = require('./PotteryWheel.js'); 
const {firePottery} = require ('./Kiln.js')
const {toSellOrNotToSell, usePottery} = require('./PotteryCatalog.js')


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 4, 5)
let plate = makePottery("plate", 7, 2)
let saucer = makePottery("saucer", 2, .5)
let bowl = makePottery("bowl", 5, 6)
let cup = makePottery("cup", 3, 4)

// console.log(mug)
// console.log(plate)
// console.log(saucer)
// console.log(bowl)
// console.log(cup)
// Fire each piece of pottery in the kiln
let mugFired = firePottery(mug, 1800)
let plateFired = firePottery(plate, 4000)
let saucerFired = firePottery(saucer, 1500)
let bowlFired = firePottery(bowl, 300)
let cupFired = firePottery(cup, 2100)

// console.log(mugFired)
// console.log(plateFired)
// console.log(saucerFired)
// console.log(bowlFired)
// console.log(cupFired)
// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(plate)
toSellOrNotToSell(saucer)
toSellOrNotToSell(bowl)
toSellOrNotToSell(cup)

// Invoke the component function that renders the HTML list

