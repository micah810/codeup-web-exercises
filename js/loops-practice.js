function roll(a, b){
    for (let i = 0; i < a; i++) {
        console.log("rolling a die")
    }

}
roll(3,6)

// Returns a random integer between min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}