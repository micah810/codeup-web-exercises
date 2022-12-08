/*
 * Complete the TODO items below
 */
// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
//var name = 'your_name_here';
//var email = '';
//var languages = [];

const name = 'Micah';
const email = 'micah@codeup.com';
const languages = ['html', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
// users.push({
//    name: name,
//    email: email,
//    languages: languages
//  });

users.push({
    name,
    email,
    language,
})


// TODO: replace `var` with `let` in the following variable declarations
//var emails = [];
//var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
//users.forEach(function(user) {
//    return emails.push(user.email);
//  });
//users.forEach(function(user) {
//    return names.push(user.name);
//  });

let users.forEach((user) =>
    return names.push(user.name);
)
console.log(name)

// TODO: replace `var` with `let` in the following declaration
var developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    //const name = user.name;
    //const email = user.email;
    //const languages = user.languages;
//const {name, email, languages} = user;
//OR || OR || OR//
    users.forEach(function(name, email, languages) {

    // TODO: rewrite the assignment below to use template strings
   // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
//  });
        developers.push(${name} + '\'s email is ' + ${email} + ${name} + ' knows ' + ${languages.join(', ')});
    });

// TODO: Use `let` for the following variable
//var list = '<ul>';
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
//developers.forEach(function (developer) {
    developers.forEach(function (developer) {
for (const developer of developers) {

}
// TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
});
list += '</ul>';