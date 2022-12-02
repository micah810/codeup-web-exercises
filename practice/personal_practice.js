function arrayStringify(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            result += ", ";
        }
        result += fruits[i];
    }
    return result;
}

//for each loop
    //explain call back function
    //show changing elemtn in callback function 
    //can't EASILY stop iteration
console.log("----------------------");

function printFruit(fruit, index){
    console.log('${index + 1'}. ${fruit}');
}

fruits.forEach(printFruit);

for (const arrayElement of array ) {
    
}