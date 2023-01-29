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
function grumpus(){
    console.log('ugh! this isnt working!');
    console.log('ugh! this isnt going to work!');
    console.log('ugh! this isnt what i want to do right now!');
}
grumpus();
for(let i =0; i < 50; i++){
    grumpus();
}

//Dice roll function
function rollDie(){
    let roll = Math.floor(Math.random()*6) + 1;
    console.log('Rolled: ${roll}');
}

//cards
function getCard(){
    2,3,4,5,6,7,8,9,10,J,Q,K,A
}