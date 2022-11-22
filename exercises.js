var a = 1;
var b = a++;
var c = ++a;
console.log(a, b, c)

var d = "hello";
var e = false;
d++;
e++;
console.log(d, e)

var perplexed;
perplexed + 2;
console.log(perplexed + 2)

var theLittleMermaid = 3
var brotherBear = 5
var hercules = 1
var price = 5
console.log((theLittleMermaid + brotherBear + hercules) * price)

var google = 400
var amazon = 380
var facebook = 350
console.log((400 * 10) + (350 * 6) + (350 * 4))

var studentSch = true
var empty = true
console.log(studentSch == empty)

var sample = "Hello Codeup";
sample.toUpperCase
sample.toUpperCase()
sample += " students";
console.log(sample);
sample.indexOf("c")
sample.replace("Students", "Class");
sample.indexOf("C");


var itemsPurchased = 3;
var offerExpired = false;
var premiMem = true;
var productOffer = (premiMem || itemsPurchased > 2 && offerExpired == false);
console.log(productOffer);

var username = 'codeup';
var password = 'notastrongpassword';
console.log(password.includes(username));
console.log(username === username.trim());
console.log(password === password.trim());