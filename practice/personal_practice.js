"use strict"
(function()){
let rey = object();
console.log(rey);
rey = {}
console.log(rey);
rey.petType = "dog";
rey.breed = "german shepard";
console.log(rey);

let reyPetType = "dog";
let reyBreed = "german shepard";
}

console.log(rey.breed);
console.log(rey["breed"]);

rey.breed = "husky";
rey.gender = "male";

const dolly = {
    name: "foofoo",
    gender: "female",
    breed: "bulldog",
}
foofoo.favoriteToys = ["ball", "bone"]

console.log(pets[0].favoriteToys[1]);

fucntion doDogStuff(myPets){
    for (const pet in myPets){
        const pet = myPets[petIndex];
    if (typeof pet.favoriteToys === "undefined")
        console.log(p"calling ASPCA...");
    } else {
        console.log(pet.favoriteToys);
    }
}

const redCar = {
    make: "chevy",
    model: "corvette",
    honk: function(){
        console.log("beep beep");
    }
}
const blueCar = {
    make: "dodge",
    model: "charger",
    honk: function (){
        console.log("honk honk");
    }
}

redCar.honk();
blueCar.honk();