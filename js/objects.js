(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {

    }
    console.log("micah");
    console.log("larson");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function(person){
        console.log('hello from'${person.firstName ${person.LastName}) + "!")
    }
    person.sayHello();
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let groceries = Math.floor(Math.200);
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


    var shoppers = [
        {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
shoppers.forEach(function(shopper, index));
        let discount =0
        if(shopper.amount > 200){
            discount = .12;
        let finalAmount = shopper.amount - (shopper.amount * discount)
        }
    console.log('${shopper.name} ${shopper.amount} ${discount}');

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     */

    let books = {[
        books.push = {[
                story: "blue fish, red fish, something fish",
            author: "Theodor Seuss"
                ]}
        ,
        story2: "ella enchanted",
        author2: "gail carson",
        story3: "eragon",
        author3: "chistopher paolini",
            ]}
    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)

    /**
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
        for (const book of books){
            console.log(books.indexOf(book))
        }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    //gray means not used
function createBook(title, fName, lName){
    let book = {
        title: title,
        author: {
            firstName: fName
            lastName: lname
        }
    };
    return book;
    }
    books.push(createBook("dune", "frank", "Herbert"));\
    console.log(books);
})();,