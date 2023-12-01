"use strict";
let person = "pakistan";
let age = 20;
if (person == "pakistan") {
    if (age >= 18)
        console.log("you are eligible to cast vote");
}
else {
    console.log("you are not able to cast vote");
}
let name1 = "Pakistan";
let name2 = "Lahore";
let age2 = 21;
let status1 = "married";
if (name1 == "Pakistan") {
    if (name2 == "Lahore")
        if (age2 >= 18)
            console.log("you have qualified ");
}
else if (name1 != "Pakistan") {
    console.log("you can't qualified");
}
else {
    console.log("quit");
}
function greet(name1, name2) {
    return `Welcome, Sir ${name1} and Sir ${name2}`;
}
let greet5 = greet("Zis", "Qasim");
console.log(greet5);
function math1(num6, num7, num8) {
    return num6 + num7 + num8 >= 100;
}
const actual = math1(50, 22, 10);
console.log(actual);
let country = "Pakistan";
let age4 = 34;
if (country == "Pakistan") {
    if (age4 >= 18)
        console.log("You can cast vote");
}
else if (age4 < 18) {
    console.log("you can't cast vote");
}
