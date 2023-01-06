"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * lowerCase()
 * subtract()
 * multiplyBy2()
 * getLowestNumber()
 * isEvenlyDivisible()
 * inBetween()
 * replace()
 * addStringLengths()
 * convertHourToSec()
 * calculateChange()
 */

//1) Define a function named lowerCase that takes in an input
// and returns that input as a string in all lower case letters.
// Returns false if the input passed is not a string.
function lowerCase(input){
    if(typeof input === 'string'){
        return input.toLowerCase();
    }
    else{
        return false
    }
}



//2) Write a function named subtract that takes in two inputs.
// If both inputs provided are numeric or numeric strings,
//subtract will return the difference when the second input is subtracted
// from the first input. If one or both inputs is not numeric or numeric strings,
// subtract should return false
function subtract(a, b){
    if(typeof a != 'boolean' && typeof b != 'boolean'){
        if(!isNaN(a) && !isNaN(b)){
            return a - b;
        }else {
            return false;
        }
    }else{
        return false;
    }
}

//3) Define a function named multiplyBy2 that takes in an input
// and multiplies it by 2 if the input is numeric.
//If the input is Not A Number, then return false.
function multiplyBy2(c){
    if (typeof c != 'object' && typeof c != 'boolean' ) {
        if (!isNaN(c)) {
            return c * 2
        } else {
            return false;
        }
    }else {
        return false;
    }
}


//4) Write a function named getLowestNumber that takes in 3 arguments.
//If all 3 inputs are numbers or numeric strings,
//then return the lowest number.
// If any of the 3 inputs is missing or non-numeric, then return false.
function getLowestNumber(d,e,f){
    if(!isNaN(d) && !isNaN(e) && !isNaN(f)) {
        return Math.min(d,e,f);
    }
    return false;
}

//5)Define a function named isEvenlyDivisible that takes in two inputs:
//a numeric value and divisor.
// If the numeric value can be evenly divided by the divisor, then return true.
//Otherwise, return false.
function isEvenlyDivisible(g, h){
if(g % 2 === 0 && h % 2 === 0){
    return true;
}
}


//6)Define a function named inBetween that takes in three numeric inputs:
//a value, a low, and high.
//If the first numeric value is in-between the ranges of the low and high values,
//then return true. Otherwise, return false.
function inBetween(i,j,k){

}

//7)Write a function named replace that takes in three inputs.
//The first input is a string, the second input is the string that
//is to be replaced, the third is the string that you are replacing the second
//input with. Only replace the first occurrence of the matched string.
//Return the string with the newly replaced values.
//If the first input is not a string, return false.
function replace(l,m,n){
    if(text.replace('l', 'm', 'n')){
        return true;
    }
}

//8)Write a function named addStringLengths that takes in two inputs.
//If both inputs provided are strings,
//addStringLengths returns the sum after adding the length
//(number of characters) of both strings.
//If either or both inputs are not strings, return false.
function addStringLengths(o, p){
    if(typeof o === 'string' && typeof p === 'string'){
        return true;
    }
}

//9)Define a function named convertHourToSec that takes in one input Hours.
//Return the conversation of the number of hours into total seconds.
//If the input is not numeric or a numeric string, convertHourToSec, should return false.
function convertHourToSec(Hours){
    if(!isNaN(Hours) && typeof Hours !== 'boolean' && Hours !== null){
        return Hours * 3600;
    } return Hours < 0;
}

//10)Write a function named calculateChange that takes in two inputs,
// totalPaid and totalCost. If both inputs are numeric or numeric strings,
//calculateChange should return the change after subtracting the cost from the amount paid.
//The return should be in $x.xx format as a string.
//If either or both inputs are not numeric or numeric strings, calculateChange should return false.
function calculateChange(totalPaid, totalCost){
    if(!isNaN(totalPaid) && !isNaN(totalCost) &&
        typeof totalPaid !== 'boolean' && typeof totalCost !== 'boolean'){
        let change = totalPaid - totalCost
        return '$' + change.toFixed(2);
    }
    return false;
}
console.log(!isNaN(true));

"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

//1
function isANumber(a) {
    if(!isNaN(a) && typeof a !== 'boolean'
        && typeof a !== 'string' && a !== null){
        return true;
    } return false;
}

//2
function increment(b){
    if(!isNaN(b) && typeof b !== 'boolean' && b !== null){
        return b + 1;
    } return false;
}

//3
function decrement(c){
    if(!isNaN(c) && typeof c !== 'boolean' && c !== null){
        return c - 1;
    }return false;
}

//4
function getHighestNumber(d,e,f){
    if(!isNaN(d) && !isNaN(e) && !isNaN(f)){
        return Math.max(d,e,f);
    }return false;
}

//5
function parseNumber(g) {
    return parseFloat(g);
}

//6
function add(h,i){
    if(!isNaN(h) && !isNaN(i) &&
        typeof h !== 'boolean' && typeof i !== 'boolean'){
        return h + i;
    } return false;
}

//7
function multiply(j,k){
    if(!isNaN(j) && !isNaN(j)
        && typeof j !== 'boolean' && typeof k !== 'boolean'
        && j !== null && k !== null){
        return j * k;
    } return false;
}

//8
function square(l){
    if(!isNaN(l) && typeof l !== 'boolean' && l !== null){
        return l * l;
    } return false;
}

//9
function sumOfSquares(m,n){
    if(!isNaN(m) && !isNaN(n) && square(m) && square(n)){
        return (m * m) + (n * n);
    }return false;
}

//10
function isPalindrome(o){
    if(typeof o === "string"){
        return true;
    } return false;
}

