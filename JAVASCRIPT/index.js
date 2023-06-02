// document.getElementById("sample").innerHTML = "<h1>This is Javascript</h1>"

// document.write("Displays on the web");


// console.log("find me in the console")

// alert("Attention seeker")

var bag;
bag = 3;

console.log(bag);

bag = "hello";

console.log(bag);

// let or const

// let age = 12;
// const monthsInAYear = 12;

// age = 13;

// console.log(age);
// monthsInAYear = 13;

// console.log(monthsInAYear);

let str = "hello";
console.log(str);

let firstName = "Keren";
let lastName = "Musenge";

// boolean
let isLoggedIn = true;
let isAvailable = false;

let notYet;

let nothing = null;

console.log(notYet);
console.log(nothing);

// an array 

// le fruits = ["Mango", "Orange", "Pineapple", "Pear"];

// console.log(fruits)

// arithimetic operators
// + (add), - (minus), * (multiply), / (divide), % (modulus/reminder)
// ++ (Increment), -- (decrement), ** (exponentiation)

//let heg = 34;
//heg--;
//heg--;
//console.log(heg);

//console.log(5 % 2);

//let val = 2 / 2;

// console.log(typeof val);
// < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal)
// == (euqal to), === (exactly equal to), ! (not), != (not equal to) !== (exactly not equal to),


// prompt("what is your name");

// let firstName = prompt("what is your name");
// if (firstName == "Keren")

// console.log (Name)

// if the prompt comes with your name value alert welcome back, 
//if it is with another name alert welcome name given in the prompt

// while(index < 100) {
//    index++;
//    if (index % 3 == 0 && index % 5 == 0) {
//     console.log("BlaBlu");
 //   } else if (index % 3 == 0) {
 //       console.log("BlaBlu");
 //   } else if (index % 5 == 0) {
 //       console.log("Blu");
 //   } else {
 //       console.log(index);
 //   }
// }

// switch (userName2) {
//    case null:
//    case "":
//      alert("Your Name is needed, please reload the page and enter your name");
//      break;
//    case (userName2 >= "a" && userName2 <= "z") || (userName2 >= "A" && userName2 <= "Z"):
//      alert("Hello, Welcome " + myname4);
//      break;
//    default:
//      alert("Hello, Welcome " + userName2);
//  }

let people = ["Jack", "Mary", "Isaac", "Paul"];
let MixedData = ["Mike", 1, true];

console.log(people.length);

people.push("James");

console.log(people);

people.pop();

console.log(people);
people.shift();

console.log(people);

people.unshift("Helen");
console.log(people);

people.splice(2, 2); // first number is where to start deleting from,
// 2nd number is how many items to delete starting from the first number

console.log(people);

for (let i = -; i < people.length; i++) {
    console.log(people[i]);
}

//people[0];
//people[1];
//people[2];
//people[3];
//people[4]

