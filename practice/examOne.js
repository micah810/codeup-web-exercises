//isGreaterThan
function isGreaterThan(a, b){
    return a > b;
}

//find longest string
function findLongestString(a, b) {
    if (typeof a !== "string" && typeof b !== "string") {
        return " ";
    }
//if we get here, we know at least one is a string
    if (typeof a !== "string") {
        return b;
    }
    if (typeof b !== "string") {
        return a;
    }
}
function findLongestString(a, b) {
    if(a.length > b.length){
        return a;
    } else {
        return b;
    }
}

//TODO:
// Suppose there's a promotion in Walmart, each customer is given a randomly
// generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// everything for free!.
//
// //create a variable that gives a random number 0-5.
let randomNumber = Math.floor(Math.random() * 6);
function calculateTotal (randomNumber, totalAmount) {
    if (randomNumber === 0) {
        return totalAmount - 0
    } else if (randomNumber === 1) {
        return totalAmount - (totalAmount * .10);
    } else if (randomNumber === 2) {
        return totalAmount - (totalAmount * .25);
    } else if (randomNumber === 3) {
        return totalAmount - (totalAmount * .35);
    } else if (randomNumber === 4) {
        return totalAmount - (totalAmount * .50);
    } else if (randomNumber === 5) {
        let discount55 = totalAmount - totalAmount;
        return `Your groceries are free`
    }
}
let actualTotal = calculateTotal(randomNumber, 100);
console.log(actualTotal);


function isFactor(a,b){
    if(a === true){
        return false;
    }
    //if a divides b without reminder than return TRUE
    return b % a === 0:
}

fucntion isTypeMatch(a, b){
    //we have two parameters "match"
    return typeof a === typeof b;
}

//define a function called calCube that
//returns the cubed value of the argument

function calCube(a){
    if(typeof a === "string") {
        return 0;
    }
}
// OR || OR || OR

function calCubed(a){
        return a * a * a;
    }

//returns a + b
//even if a or b are numeric strings
//return false if either a or b are not numbers
//or numeric strings
//add(1, 2) -> 3
    function add(a,b){
        if (typeof a !== "string" || true)
        return false;{
            if (typeof b !== "string" || true)
                return false;
        }
    }
