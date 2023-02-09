const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//callback func will execute every user
const filtered = users.filter(function (user) {
    if (user.languages.length >= 3)
        // console.log(user);
        return true;
});
console.log(filtered);
//filter has the ability to give back a new array
//mod look at clock
// progress report february 16th


const emails = users.map(users => users.email);
console.log(emails);

//Use .reduce to get the total years of experience
// from the list of users. Once you get the total of years
// you can use the result to calculate the average.

const totalYears = users.reduce((total, users) => {
    return total + users.yearsOfExperience;
},0);
    const averageYearsOfEx = totalYears / users.length;
    console.log(totalYears);
    console.log(averageYearsOfEx);

    const longestEmail = users.reduce((longest, user) => {
        return user.email.length > longest.length ? user.email : longest;
    }, '');
//The ? is a shorthand way of writing a simple if-else statement in JavaScript
//The [ ' ' ] is the initial value for the accumulator
    console.log(longestEmail);

    const names = users.reduce((sentence, user, index) => {
        return index === users.length - 1 ?
            sentence + user.name :
            sentence + user.name + ',';
    }, 'Your instructors are: ');
    console.log(names);