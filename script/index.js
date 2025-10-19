//console.log("Hello,world!");
//let age = 24;
//let name = "Mina"; 
//let color = "Purple";

//console.log(`Hello im ${name}. Im ${age} years old and my favourite color is ${color}.`);

//let num1 = 6;
//let num2 = 4;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num1 / num2);

//1. Ask the user to enter a price tag using prompt(), for example: $49.99
let userInput = prompt("Enter a price tag:");

//2. Remove the dollar sign
let priceNoSign = userInput.replace('$', '');

//3. Convert the input from string to number 
priceNoSign = Number(priceNoSign)

//4. Reduce the price by 10 percent 
priceNoSign = 0.9 * priceNoSign;

//5. Print out the new price using console.log(), for example: 'Your new price is: $44.99' 
console.log("Your new price is: $" + priceNoSign); 