//Class 1:
console.log('Hello World');
//Class 2 & 3:
//  1) Declare & Initialize:
var person = 'Bilal';
console.log(person);
// LET : (Declare one time & Initialize multiple time)
var king = "Quddus";
king = "Mustafa";
console.log(king);
// CONST : (Declare one time & Initialize one time)
var pro = 'Ahmed';
console.log(pro);
// VAR : (Declare multiple time & Initialize multiple time)
var badshah = 'Mustafa';
var badshah = 'Quddus';
console.log(badshah);
// Legal & Illegal method :
var $king = 'Majeed';
var favoriteColor = 'Yellow';
console.log(favoriteColor);
favoriteColor = 'Red';
console.log(favoriteColor);
// storing Bilal in a variable
var Name = 'Muhammad Bilal'; // string
var age = 18; // Number
var isStudent = true; //Boolean
var random = 18;
//strongly typed syntax
var a = "Pakistan";
var b = 10;
var c = true;
//type inference
var d = "Saudi Arabia";
var e = 11;
var f = false;
// Simple Calculator:
var num1 = 30;
var num2 = 50;
console.log("The Answer of Sum is :", num1 + num2);
console.log("The Answer of Subtraction is :", num1 - num2);
console.log("The Answer of Division is :", num1 * num2);
console.log("The Answer of Multiplication is :", num1 / num2);
//Class 4 & 5:
var firstname = 'Muhammad';
var lastname = 'Bilal';
var fullName = firstname + '' + lastname;
console.log(fullName);
var human = "Mustafa";
console.log("My Name is" + '' + human);
// "-----> Operators <-----" :
// 1) Arithmetic Operators:
// i.e : (+, -, *, /, %, **)
var Apple = 5;
console.log(Apple % 2);
var Mango = Math.pow(5, 2);
console.log(Mango);
// 2) Unary Operators:
// -) increment (++i or i++)
// -) decrement (--i or i--)
var h = 12;
h++;
console.log(h);
var i = 12;
i--;
console.log(i);
// 3) Assigment Operators:
// i.e : (=, -=, +=, *=, /=, ...)
var j = 10;
j -= 10;
console.log(j);
var k = 10;
k += 10;
console.log(k);
var l = 10;
l *= 10;
console.log(l);
var n = 10;
n /= 10;
console.log(n);
// 4) Comparison Operators:
// i.e : (==, ===, <, >, =<, >=, !=)
var o = 10;
var p = 11;
console.log(o == p);
var m = 10;
var v = 10;
console.log(m === v);
var r = 10;
var s = 10;
console.log(r < s);
var t = 9;
var x = 10;
console.log(t > x);
var y = 10;
var E = 9;
console.log(y != E);
// Class 6
// 5) Logical Operators:
// i.e : { AND(&&), OR(||), NOT(!)}
var num3 = 10;
var num4 = 20;
console.log(num3 == num4 && num3 < num4);
var num5 = 10;
var num6 = 15;
console.log(num5 != num6 || num5 < num6);
var num7 = 10;
var num8 = 20;
console.log(!(num7 < num8));
// Logic Statments:
// i.e : (If, Else If, Else)
var num9 = 10;
var num10 = 20;
if (num9 === num10) {
    console.log("Both are equal");
}
else {
    console.log("Both are diferent");
}
var num11 = 10;
var num12 = 20;
if (num11 != num12) {
    console.log("Both are equal");
}
else {
    console.log("Both are diferent");
}
var num13 = 10;
var num14 = 20;
var num15 = 5;
if (num13 == num14) {
    console.log("Both are equal");
}
else if (num13 > num15) {
    console.log("Num14 is greater");
}
else {
    console.log("Both are diferent");
}
var isRaining = true;
if (isRaining) {
    console.log("Wear a raincoat.");
}
else {
    console.log("Wear sunglasses.");
}
// Class 7 & 8
// If-Else Statement:
var people = "Bilal";
if (people === "Bilal") {
    console.log("A Good Teacher");
}
else {
    console.log("Not a Good Teacher");
}
// Ternary Operators :
// Condition ? Message : Message
// ? ---> IF
// : ---> Else
var persons = "Muhammad";
persons === "Bilal" ? console.log("A Good Teacher") : console.log("Not a Good Teacher");
// Switch
var Devices = "Tube-Light";
switch (Devices) {
    case "Fans":
        console.log("Fan is Turn on");
        break;
    case "Lights":
        console.log("Light is Turn on");
        break;
    case "Charger":
        console.log("Charger is Turn on");
        break;
    case "Tube-Light":
        console.log("Tube-Light is Turn on");
        break;
}
var isHungry = true;
var Snack = isHungry ? "Banana" : "Shake";
console.log("You should have some ".concat(Snack, "."));
var guess = 7;
var target = 5;
if (guess < target) {
    console.log("Your guess is too Low.");
}
else if (guess < target) {
    console.log("Your guess is too High.");
}
else {
    console.log("Your guessed correctly!");
}
// Friend Checker Game:
var isFriend = "Muhammad";
if (isFriend === "Muhammad" || isFriend === "Mustafa") {
    console.log("".concat(isFriend, " is your friend."));
}
else {
    console.log("".concat(isFriend, " is not your friend."));
}
// Inquirer:
//  import inquirer from "inquirer";
//  let isFriend = await inquirer.prompt([{
//  name:"name",
//  type:"string",
//  message:"Enter your friend name"
//  }]);
//Class 9
// Function : A function is a block of code designed to perform a perticuler task.
// Basic Function
function printer() {
    console.log("Ali");
}
printer();
// other types.
function sum() {
    var num1 = 15;
    var num2 = 20;
    var x = num1 + num2;
    console.log(x);
}
sum();
function Bio(Name, Age, Profession) {
    if (Name === void 0) { Name = "Bilal"; }
    if (Age === void 0) { Age = 18; }
    if (Profession === void 0) { Profession = "Student"; }
    console.log("My name is ".concat(Name));
    console.log("My age is ".concat(age));
    console.log("I am a ".concat(Profession));
}
Bio();
//Return function.
function suppose(num3, num4) {
    var y = num3 + num4;
    return y;
}
console.log(suppose(20, 15));
//Arrow function.
var supp = function (num3, num4) {
    var y = num3 + num4;
    return y;
};
var z = supp(15, 15);
console.log(z);
// // 1 method 
// let Teacher:T_type= {
//     name: "Muhammad",
//     exp:5,
// };
// let Student:S_type= {
//     name: "Bilal",
//     rollno:3351,
// };
// 2 Method
var both = {
    name: "Muhammad",
    exp: 5,
    rollno: 3351,
};
// Class 12 13 & 14:
// Methods of An Array;
var Test = ["Muhammad", "Bilal"];
// 1) POP:
Test.pop();
console.log(Test);
// 2) PUSH:
Test.push("Quddus");
console.log(Test);
// 3) UnShift:
Test.unshift("Mustafa");
console.log(Test);
// 4) Shift:
Test.shift();
console.log(Test);
// 5) Slice:
console.log(Test.slice());
// 6) Splice: (pop, push, shift, unshift)
Test.slice(1, 1);
console.log(Test);
// 7) Lenght:
console.log(Test.length);
// Tuple;
var Marks = [3351];
// Class 15 :
var a = 54;
console.log(a.toFixed(2));
// Math random:
var A = Math.random();
console.log(A);
