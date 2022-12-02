"use strict"
alert('Hello, welcome to my website!')

let animal = prompt('What is your favorite animal?');

alert('Get outta here! ${animal} is my favorite animal too!')

console.log('Hello from external javascript!')

let littleMermaid = Number(prompt("How many days did you rent the little mermaid?"))
let brotherBear = Number(prompt("How many days did you rent brother bear?"))
let hercules = Number(prompt("How many days did you rent hercules?"))

let totalPrice =((parseInt(littleMermaid)+ parseInt(brotherBear)+ parseInt(hercules)) *3)

alert('${totalPrice} is how much it will cost')