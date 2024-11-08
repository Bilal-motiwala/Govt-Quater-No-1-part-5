console.log("Hello, World!");
var Personname = "Eric";
console.log('Hello $ {PersonName}, would like to learn some phyton today?');
var height_in_meters = 1.75;
var weightinkg = 70;
var result = weightinkg /
    (Math.pow(height_in_meters, 2));
console.log(result);
var firstname = 'Bilal';
var lastname = 'Motiwala';
var fullname = firstname + '' + lastname;
console.log(fullname);
var weightInKg = 70; // 70Kg
var heightInMeters = 1.75; // 1.75m
var bmi = weightInKg / (heightInMeters + heightInMeters);
console.log('Your BMI is $ {bmi}');
var percentage = 70;
if (percentage >= 80) {
    console.log('You Got A+ Grade');
}
else if (percentage >= 70) {
    console.log('You Got A Grade');
}
else if (percentage >= 60) {
    console.log('You Got B Grade');
}
else if (percentage >= 50) {
    console.log('You Got C Grade');
}
else if (percentage >= 40) {
    console.log('You Got C Grade');
}
else {
    console.log('You are failed');
}
console.log(result);
var isLogedIn = false;
var checked = isLogedIn ? "you're logedIn" : "signUp first";
console.log(checked);
if (isLogedIn) {
    console.log("you're LogedIn");
}
else {
    console.log("signUp");
}
var email = "bilalmotiwala20@gmail.com";
var password = "bilal402";
var isLognedIn = false;
if (email == 'bilal200@gmail.com'
    &&
        password == 'bilal402') {
    isLognedIn = true;
}
else {
    isLognedIn = false;
}
{
    isLognedIn = true;
    console.log("Logged In !!");
}
if (email == 'bilal200@gmail.com'
    ||
        password == 'bilal402') {
    console.log("Your email or password is incorrect");
}
var studentRank;
switch (studentRank) {
    case 3:
        console.log("Congrats! You secured 3rd position");
        break;
    case 1:
        console.log("Congrats! You secured 1rd position");
        break;
    case 2:
        console.log("Congrats! You secured 2rd position");
        break;
    default:
        console.log("Sorry !");
        break;
}
function checkTime() {
    var get_date_and_time = new Date();
    console.log(get_date_and_time);
}
checkTime();
checkTime();
checkTime();
checkTime();
checkTime();
function getTaxSlab(salary) {
    var slab = '';
    if (salary >= 100000) {
        slab = '17%';
    }
    else if (salary >= 50000) {
        slab = '15%';
    }
    else {
        slab = '10%';
    }
    return slab;
}
getTaxSlab(20000);
getTaxSlab(200000);
console.log('Your salary tax slab is : ', getTaxSlab(10000));
function addition(num1, num2) {
    console.log(num1 + num2);
}
addition(15, 10);
function recursiveFunc(count) {
    console.log("CountDown :", count);
    if (count >= 0) {
        recursiveFunc(count - 1);
    }
}
recursiveFunc(5);
var sampleArray = [1, 2, 3, 4, 5, 6, 10, 15, 25, 35, 1, 5, 80];
console.log(sampleArray.length);
sampleArray[0];
sampleArray[9];
var sampleArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sampleArray2.filter(function (c) { return c % 2 == 0; }));
function test(c) {
    return c % 2 == 0;
}
var subject = ["Ahmed", "Mustafa", "Bilal", "Mudasir", "Hasan"];
console.log(subject);
subject.push("Asad");
console.log(subject);
var legend = ["Ahmed", "Mustafa", "Bilal", "Mudasir", "Hasan"];
console.log(legend);
legend.push("Asad");
console.log(legend);
legend.push("Asad");
console.log("After Push :", legend);
console.log("\n Unshift");
console.log("Before Unshift :", legend);
legend.push("Quddus");
console.log("After Unshift :", legend);
console.log("\n Pop");
console.log("Before Pop :", legend);
legend.pop();
console.log("After Pop :", legend);
console.log("\n shift");
console.log("Before shift :", legend);
legend.shift();
console.log("After shift :", legend);
var a = {
    name: 'Muhammad Bilal',
    FatherName: 'Abdul Quddus',
};
var b = {
    name: 'Muhammad Mustafa',
    FatherName: 'Quddus Motiwala',
    age: '43'
};
a = b;
// Variable Initialization
var collectionOfEmployee = [
    {
        employeeId: 3351,
        employeeName: "Muhammad Mustafa",
        salary: 50000,
    },
    {
        employeeId: 3090,
        employeeName: "Bilal Motiwala",
        salary: 50000,
    },
    {
        employeeId: 2034,
        employeeName: "Abdul Quddus",
        salary: 70000,
    },
];
var filterBySalary = collectionOfEmployee.filter(function (employee) { return employee.salary >= 50000; });
var filterByEmployeeId = collectionOfEmployee.filter(function (employee) { return employee.employeeId == 3351; });
var filterByEmployeeName = collectionOfEmployee.filter(function (employee) { return employee.employeeName.includes("Bilal"); });
// Loop
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for//of - loops through the values of an iterable object
// while - loops through a block of code while a specified
//condition is true
// do/while - also loops through a block of code while
//a specified condition is true
var student = ["Ahmed", "Raza", "Mannan", "Hadi"];
for (var i = 0; i < student.length; i++) {
    console.log(student[i]);
}
for (var i = 0; i < 3; i++) {
    console.log("Assalamu Alaikum!");
}
//export function add (a:number , b:number):number {
//  return a+b;
//}
//export function substract(a:number, b:number): number {
//  return a-b;   
//}
//let result1 = add(5 > 3);
//let result2 = substract(10 > 5);
//console.log("addition:", result1);
//console.log("substraction:", result2);
//export default `./module.ts`; 
//RestParameter with the help of function example
//function namemode (firstName: string , lastName: string) {
// return console.log(firstName,"",);
//}
//Tuple syntax and preparing tuple structure
//let ourTuple:readonly[number, boolean, string];
/*adding element on the basis of our structure
/which is defined above*/
//ourTuple=[2,true,"two"]
//console.log(ourTuple);
//let tuple1:readonly [string, number, boolean, string]
//tuple1= ["Hello",2,false,"world"]
//console.log(tuple1);
//function checking (file1:any,file2:any){
//  return console.log(file1,file2);
//}
//checking(false,true);
// creating tuple struction                    Assigning values
//let newtuple:[number,boolean,string] = [1,true,"false"]
//Pushing value which is not included in our design structure
//newtuple.push("done")
//console.log(newtuple);
//function one(arg1: number);
//function one(arg1: number, arg2: number);
function funscope() {
}
setTimeout(function () {
    console.log(4);
}, 1000);
funscope();
console.log("add water");
setTimeout(function () {
    console.log("tea is ready");
}, 5000);
console.log("add sugar");
setTimeout(function () {
    console.log("add tea lover");
}, 2000);
function abc() {
    console.log('Hello World');
}
function printConsole(cb) {
    cb();
}



