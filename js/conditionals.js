"use strict";
//
// function analyzeColor(blue) {
//     return "the sky is" + blue + "!";
// }
// function analyzeColor(red) {
//     return "strawberries are" + red + "!";
// }
// function analyzeColor(cyan) {
//     return "i dont know anything about" + cyan +"?";
// }
//
// if (sky === blue) {
//     weather("it's a beautiful day");
// }
// else {
//     weather("it's raining cats and dogs");
// }
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(color){
//     case'blue' :
//         return '${color'} reminds me of the ocean. ';;
//         break;
// }
// if (colors === randomColor) {
//     else (colors === black)
// }
// var randomColor = colors('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet')
// switch(randomColors) {
//     case "it's one of these colors":
//         alert("oh good because those are my favorite colors!");
//         break;
//     case "there will only be gray":
//         alert("oh ok.")
//         break;
//     default:
//         alert(colors + "i really love those colors so i hope its not gray.")
//         break;
// }
/*#########################################################################################*/
//
// var luckyNumber
//     [0, 1, 2, 3, 4, 5];
// case 1:
//     discountAmt = .1;


/* ########################################################################## */
"use strict";
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so


 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"

 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * //create a variable that gives a random number 0-5.

  let randomNumber = Math.floor(Math.random() * 6);
 * // conditional 0=0 discouns
 * if (randomNumber === 0){
 *     return no discount
 * }
 * // 1=10%dicsounc
 * else if(randomNumber === 1){
 *     return 10%
 * }
 * //2=25%discound
    else if(randomNumber === 2){
    return 25%
    }
 * //3= 35%discount
  else if(randomNumber === 3){
  return 35%
  }
 * 4=50%
  else if(randomNmber === 4){
  return 50%
  }
 * 5= free
 else if(randoNumber === 5){
 return free
 }

 function calculateTotal (randomNumber, totalAmount){
 if (randomNumber === 0){
    return no discount
}
else if(randomNumber === 1){
    return 10%
}
    else if(randomNumber === 2){
    return 25%
    }
  else if(randomNumber === 3){
  return 35%
  }
4=50%
  else if(randomNmber === 4){
  return 50%
  }
5= free
 else if(randoNumber === 5){
 return free
 }
 }
 *
 *
 *
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
//#################################################################################

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 *
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
function analyzeColor(colors,randomColor){
    if(randomColor === 'red'){
        alert("red apples are my favorite" + "!");
    } else if(randomColor === 'orange'){
        alert ("orange juice is my favorite juice");
    } else if(randomColor === 'yellow'){
        alert("yellow snow is BAD" + "!!!");
    } else if(randomColor === 'green'){
        alert("green is my favorite color on me");
    }else if(randomColor === 'blue'){
        alert("mr blue sky is a great song");
    }else if(randomColor === 'indigo'){
        alert("indigo is a neat");
    }else if(randomColor === 'violet'){
        alert("violet is super pretty");
    }
}
console.log(analyzeColor);

//##############################################################################

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

//###############################################################################

var number
if (confirm("Hi, do you want to enter a number" + "?") === true) {
    alert("Great lets get started!");
    let userInput = prompt('please enter a number');
    if(userInput % 2 === 0){
        alert("number is even");
    } else if(userInput % 2 !== 0){
        alert("number is odd");
    }
}
