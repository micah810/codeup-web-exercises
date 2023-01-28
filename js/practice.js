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
for(let i = 0; i < myAnimals.length; i++){
 let animal = myAnimals[i];
 console.log('${animal.pet} are ${animal.age}');
}