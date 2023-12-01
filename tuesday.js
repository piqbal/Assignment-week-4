"use strict";
//Q#1: Write a program that calculates the area of a rectangle.
function area(length, width) {
    return length * width;
}
const rectanglearea = area(10, 20);
console.log(rectanglearea);
//Q#2: Write a program that takes input and calculates the volume of a cube.
function cubevolume(sidelength) {
    return sidelength ** 3;
}
const calculatecubevolume = cubevolume(4);
console.log(calculatecubevolume);
// Q#3: Write a program that checks if a given number is PromiseRejectionEvent, negative, or zero. 
let num1 = 12;
if (num1 > 0) {
    console.log("num1 is positive");
}
else if (num1 == 0) {
    console.log("num is equal to zero");
}
else {
    console.log("num1 is negative");
}
// Q#4: Write a program that checks if a given number is positive or odd.
let num3 = 13;
if (num3 % 2 == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd");
}
// Q#5: Write a program that determines if a person is eligible to vote based on their age.
let age1 = 13;
if (age1 >= 18) {
    console.log("You are eligible to cast vote");
}
else {
    console.log("You are not eligible to cast vote");
}
// Q#6: Write a program that calculates the result of a mathematical XPathExpression. ((10+5)*3-2/(4%3)-7)
function mathematicalexpression() {
    return ((20 + 5) * 3 - 2 / (4 % 3) - 7);
}
const result6 = mathematicalexpression();
console.log(result6);
