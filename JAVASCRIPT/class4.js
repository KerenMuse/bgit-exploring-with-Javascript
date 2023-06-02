// let Cup = {
//     color: "Blue",
//     weight: "2kg",
//     material: "Plastic",
//     number : [1, 2, 3, 4, 5, 6],
// };

// let EmployeeDetails = [
//     {
//         name: "Keren Musenge",
//         role: "Junior Developer",
//         level: "2",
//     },
//     {
//         name: "Mike Doe",
//         role: "Software Engineer",
//         level: "2",
//     },
//     {
//         name: "Mike Doe",
//         role: "Software Engineer",
//         level: "2",
//     },
// ];

// console.log(EmployeeDetails[0].name)

// Cup.color = "red";

// console.log(Cup.number);

// function sayHello(user) {
//     console.log("hello " + User);
// }

// //calling function
// sayHello();

// function SayHello(user) {
//     console.log("hello " + user);
// }

// function CalcProfit(sellingPrice, costPrice, productName) {
//     profit = sellingPrice - costPrice;
//     return productName + " profit is " + profit + "Pounds";
// }

// CalcProfit(7000, 65000, "Soap");

// console.log(profit);
// console.log(CalcProfit(7000, 6500, "Soap"));
// console.log(CalcProfit(6000, 5000, "can"));
// console.log(CalcProfit(1000, 6500, "Pen"));

// function Test() {
//     return "Testing function"
// }

// alert(Test());

// function CalcAgeToSeconds (currentAge, yourName) {
//     let ageToSeconds = currentAge * 31556926;
//     // let secondsPerYear = 365 * (60;
//     console.log(yourName + "'s age in seconds is " + ageToSeconds);
// }


// fixthis ----function showProfit() {
//     console.log(profit);
// }

// showProfit();
// console.log();
// console.log(CalcProfit(6000, 5000, "can"));
// console.log(CalcProfit(1000, 6500, "Pen"));

//dom manipulation

document.getElementById("sample").innerHTML = "Hello, this DOM Manipulation";

document.getElementsByClassName("test")[2].innerHTML = "manipulated div with class";

document.getElementsByTagName("div")[2].innerHTML = "<h1>third div tag has been manipulated </h1>";