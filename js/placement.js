// 1a: Declare and initialize a variable array of book objects
// named "myBooks". These objects should have two properties:
// a property of "bookTitle" that is a string of the book's title,
// and a property of "pageNum" that is the number of pages in that book.

// 1b: Use a forEach loop on your myBooks array to console.log the
// books title in way that says "Here's the title of this book: bookTitle".
const myBooks =  [ {
        bookTitle: "Junie B. Jones",
        pageNum: 12
    },
    {
        bookTitle: "The Prince",
        pageNum: 123
    },
    {
        bookTitle: "Lord Of The Rings",
        pageNum: 321
    }];
myBooks.forEach(function(book) {
    console.log("Here's the title of this book: " + book.bookTitle + " and the page number: " + book.pageNum);
});

