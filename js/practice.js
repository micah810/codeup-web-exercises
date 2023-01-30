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
function pick(arr){
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
(function (){
    //1. write a function called commasToHyphens that replaces commas in a given string parameter
    // with hyphens. The function should return the new string
    function commasToHyphens(str){
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
    function sumOfAges(people){
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