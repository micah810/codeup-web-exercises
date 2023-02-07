//array
let list = ['bread', 'cheese', 'ice'];
console.log(list)

let lottery = [12, 23, 53, 78];
console.log(lottery)

let shopping = ['cheese', 'milk', 'crackers'];
shopping[1] = 'grapes';
shopping[3] = 'wine';
shopping[shopping.length] = 'jam';
console.log(shopping)


let fruits = ['apple', 'tomatoes', 'peach'];
let veggies = ['carrots', 'celery'];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

//for loops
//i starts @1 | i stops @1 | add 1 each time
for (let i = 1; i <= 10; i++) {
    console.log('Hello', i);
}

for (let v = 1; v <= 10; v += 3) {
    console.log('Goodbye', v);
}

//For Loops & Arrays
const animals = ['lions', 'tigers', 'bears', 'frog'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
//
const myAnimals = [
    {
        pet: 'dog',
        age: 3
    },
    {
        pet: 'cat',
        age: 10
    },
    {
        pet: 'frog',
        age: 1
    }
];
for (let i = 0; i < myAnimals.length; i++) {
    let animal = myAnimals[i];
    console.log('${animal.pet} are ${animal.age}');
}

const myStudents = [
    {
        firstName: 'Micah',
        grade: 90
    },
    {
        firstName: 'Coco',
        grade: 99
    },
    {
        firstName: 'Rob',
        grade: 85
    }
];
for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}
//reverse loop
const word = 'stressed';
let reversedWord = ""
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    console.log(reversedWord);
}

//Functions
function grumpus() {
    console.log('ugh! this isnt working!');
    console.log('ugh! this isnt going to work!');
    console.log('ugh! this isnt what i want to do right now!');
}

grumpus();
for (let i = 0; i < 2; i++) {
    grumpus();
}

//Dice roll function
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log('Rolled: ${roll}');
}

//Playing Cards
// function getCard() {
//     const values = [
//         '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
//     ];
//     const valIdx = Math.floor(Math.random() * values.length);
//     const value = values[valIdx];
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const suitIdx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitIdx];
//     console.log(value, suit)
// return{value: value, suit: suit};
// }
//
function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

//Shortcut for Playing Cards
function getCard() {
    const values =
        ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // const value = pick(values);
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    // const suit = pick(suits);
    // const suitIdx = Math.floor(Math.random() * suits.length);
    // const suit = pick(suits);
    return {value: pick(values), suit: pick(suits)};
}

//REVIEW!!!!
(function () {
    //1. write a function called commasToHyphens that replaces commas in a given string parameter
    // with hyphens. The function should return the new string
    function commasToHyphens(str) {
        const newString = str.replaceAll(",", "-");
        //return str.split(",").join("-");
        return newString
    }

    console.log(commasToHyphens("hello,world"));
    //outputs "hello-world"

    //2. Write a function called sumOfAges that returns a sum of a given array of peoples objects ages
    const people = [
        {
            name: "bob",
            age: 10
        },
        {
            name: "sue",
            age: 22
        },
        {
            name: "Lou",
            age: 41
        }
    ];

    function sumOfAges(people) {
        let sum = 0;
        for (let i = 0; i < people.length; i++) {
            sum += people[i].age;
        }
    }

    // for (let i = 0; i < people.length; i++) {
    //     let humans = people[i];
    //     console.log(`${humans.name} is ${humans.age} years old`);
    // const sum = [10, 22, 41].reduce((partialSum, a) => partialSum + people, 0);
    // console.log(sum);
})();

// TEST REVIEW!!!!!
// javascript I & II
// loop objects and arrays
// dom stuff buttons to turn background green or whatever

// *NUMBER ONE*
// Write a function called isBoolean that returns true if the parameter has a data type of boolean.
function isBoolean(i) {
    if (typeof i !== "boolean") {
        return false;
    }
    return true;
}

//OR this both work
function boolean(x) {
    if (x === true || x === false) {
        return true;
    }
    return false;
}

// Otherwise, it returns false. Examples: console.log(isBoolean(42));
// outputs false console.log(isBoolean("true"));
// outputs false console.log(isBoolean(false));
// outputs true

//*NUMBER TWO*
// Write a function called hasBoolean that returns true if
// the array parameter contains at least one element that is a boolean.
// Otherwise, it returns false. Examples:
function hasBoolean(arr) {
    //look thru all elements in input. if a boolean is found return true
    //if NO boolean elements are found, return false
    for (i = 0; i < arr.length; i++) {
        if (isBoolean(arr[i])) {
            return true;
        }
    }
    return false;
}

console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true
//3
const people = [{
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];

function minAge(arr) {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        //comparison
        if (person.age < min) {
            min = person.age;
        }
    }
    return min;
}

console.log(minAge(people)); //should output 18

function longestName(arr) {
    let longestNameForNow = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.length > longestNameForNow.length) {
            longestNameForNow = arr[i].name;
        }
    }
    return longestNameForNow;
}

console.log(longestName(people)); //should output zanzibar

function createPerson(name, age) {
    const newPerson = {
        name: name,
        age: age
    }
    return newPerson;
}

const kat = createPerson("kat", 2);
console.log(kat);
//finished


// //DOM stuff
// // When the button with an id of bold-btn is clicked, that button's font weight should change to bold.
// $("bold-btn").click(function(){
//     $(this).css("font-weight", "bolder");
// });
// //
// //
// // // // When the button with an id of reload-btn is clicked, the page should reload (i.e., refresh).
// $("#reload-btn".click(function () {
//     window.location.reload();
// }));
// // //
// // // // Whenever a list item with a class of loud-item is clicked, display that list item's text in an alert().
// $(".loud-item".click(function (){
//     alert($(this).text());
// }));
// // //
// // // Whenever a list item with a class of data-item is hovered over, display that list item's data-id value in the span with an id of data-display.
// $(".data-item").hover(function (){
//     const dataId = $(this).data("id");
//     // const dataId = $(this).attr("data-id");
//     $("#data-display").text(dataId);
// });
// //
// // // Whenever the button with an id of change-text-btn is clicked, change that button's text to whatever has been typed in the input with an id of change-text-input.
// $("#change-text-btn").click(function(){
//     const newButtonName = $("#change-text-input").val();
//     $(this).text(newButtonName);
// });

let js = "fun";
console.log(40 + 8 + 23 - 10);

console.log("micah");
console.log(23);

let firstName = "micah"
console.log(firstName);

let $varable = "dolla dolla billz";
console.log($varable);

let country = "USA";
let continent = "North America";
let population = "at least 100";
console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(23);
console.log(typeof "Jonas");

const ageMicah = 2023 - 1999;
const ageCoco = 2016 - 2006;
console.log(ageMicah, ageCoco);

const age = 16;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Coco can start drinking🥰')
} else {
    const yearsLeft = 18 - age;
    console.log(`Coco is too young! Gonna have to wait another ${yearsLeft} years!`);
}

// for loops
const names = ['Micah', 'coco', 'yev', 'Dezz'];

for (name of names) {
    console.log(name);
    //Maria isnt showing on my list and idk why => its cause my dumbass didnt even put
    //Maria into the list which made this false and not run .~.)
    if (name === 'Maria') {
        console.log('Maria is in the list');
        break;
    }
}

// another for loops but this one fcked with my computer soo...
// let loading = 0;
//
// while(loading < 100){
//     console.log('Website is still loading');
//     //add a statement that would turn this false by adding plus one
//     loading++;
// }

var i = 0;
while (i < 10) {
    console.log('while loops iteration #' + i);
    i++
}
//this loop below is never true because i cannot = 10 and also be lower than 10 so it wont run
var i = 10;
while (i < 10) {
    console.log('while loops iteration #' + i);
    i++
}



//FOR LOOPS PRACTICE!!!
var numberToStopAt = 23;

for (var i = 1; i < 100; i++) {
    console.log('This loop will break at set var:' + i);
    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: BREAK!');
        //using the keyword "break" to exit for the while loop
        break;
        //nothing after 'break' will get processed
        console.log('This line will never be seen');
    }
}

//wtf why isnt it showing => because you are an idiot and didnt enter it in the console
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 181) + 20;
    console.log(`${randomNum} is ${randomNum % 2 === 0 ? "even" : "odd"}`);
}
// Here's a breakdown of the code above:
// randomNum is a variable that holds a random number.
// randomNum % 2 === 0 calculates the remainder of randomNum divided by 2 and checks if

// it's equal to 0. If the result is true, it means the number is even. If the result is false, it means the number is odd.
// ? "even" : "odd" is a shorthand if-else statement. If randomNum % 2 === 0 is true,
// then the string "even" will be returned.

// If it's false, then the string "odd" will be returned.
// The template literal (`) is used to interpolate the values of randomNum and
// the result of the shorthand if-else statement into a single string,
// which is then passed as an argument to console.log.

// The template literal syntax allows for embedding expressions,
// such as ${randomNum % 2 === 0 ? "even" : "odd"}, within a string.
// The final output to the console will be a string in the format {randomNum} is {even/odd}.


for (let i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i));
}
// The String(i) constructor converts the loop variable i to a string.
// The repeat(i) method returns a new string consisting of the original string repeated i times.
// The loop continues to run until i is greater than 9,
// and the code inside the loop is executed 9 times, generating the following pattern


for (let j = 100; j >=5 ; j -= 5) {
    console.log(j)
}
// A for loop is used to repeat a block of code until i is less than or equal to 5.
// The loop variable i is initialized to 100 and decreased by 5 after each iteration.
// After each iteration of the loop, i is decremented by 5 using i -= 5.
// The loop continues to run until i is less than or equal to 5,
// and the code inside the loop is executed 20 times, generating the pattern


const userNum = Number(prompt("enter number between 1 and 50:"));
for (let j = 1; j <= 50; j++) {
    if(i % 2 === 0){
        break;
    }
    if (i === userNum){
        continue;
    }
    console.log(j)
}

//TEST DATA: 22,295,176,440,37,105,10,1100,86,52
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//1. Create an array 'bills' containing all 10 test bill values
const bills = [22,295,176,440,37,105,10,110,86,52]
//make it a const

//2. Create empty arrays for the tips and the totals ('tips' 'totals')
const tips = [];
const totals = [];

//3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips
//and total values ( bill + tip ) for every bill value in the bills array. Use a loop
//to perform the 10 calculations
for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tips);
    totals.push(tips + bills[i]);
}
console.log(bills, tips, totals);




