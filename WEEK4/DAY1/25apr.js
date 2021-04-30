// EXERCISE
//function and a conditionals
// function isenoughMoney - 
// receives 3 parameters : how much money in the account, what I want to buy, how much it cost
// condition
	// if I have enough money, I buy the thing that I want (I update the amount of money left in the account)
	// sentence : "I'm happy, I bought a <x>"
	// if not,
	//sentence : "I'm sad"
// call the function 3 times
// money 10000, thing: computer, cost: 200
// money 10000, thing: kitchen, cost: 30000
// money 1000, thing: camera, cost: 800


function isEnoughMoney(wants)
if (wants.money > wants.cost) {
    console.log(`I'm happy, I bought a $(wants)`)


}