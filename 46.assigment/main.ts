console.log("Hello, World!")

const Personname: string = "Eric";
console.log('Hello $ {PersonName}, would like to learn some phyton today?');

let height_in_meters = 1.75
let weightinkg =70
let result = weightinkg /
(height_in_meters**2)

console.log(result)

let firstname: string = 'Bilal';
let lastname: string = 'Motiwala';
let fullname: string = firstname + '' + lastname;
console.log(fullname)

let weightInKg = 70; // 70Kg
let heightInMeters = 1.75; // 1.75m
let bmi = weightInKg / (heightInMeters + heightInMeters)
console.log ('Your BMI is $ {bmi}');

let percentage = 70
if(percentage >= 80 ){
    console.log('You Got A+ Grade')
}else if(percentage >= 70 ){
    console.log('You Got A Grade')
}else if(percentage >= 60 ){
    console.log('You Got B Grade')
}else if(percentage >= 50 ){
    console.log('You Got C Grade')
}else if(percentage >= 40 ){
    console.log('You Got C Grade')
}else {
    console.log('You are failed')
}

console.log(result)

let isLogedIn:boolean = false;
let checked :string = isLogedIn ? "you're logedIn": "signUp first";
console.log(checked);
if(isLogedIn){
    console.log("you're LogedIn");

}else{
    console.log("signUp");

}

let email = "bilalmotiwala20@gmail.com";
let password = "bilal402";

let isLognedIn = false;

if(
    email == 'bilal200@gmail.com'
    &&
    password == 'bilal402'
) {
    isLognedIn = true;
}
else {
    isLognedIn = false;
} {
    isLognedIn = true;
    console.log ("Logged In !!")
}
 if (
    email == 'bilal200@gmail.com'
    ||
    password == 'bilal402'
) {
    console.log("Your email or password is incorrect")
}

let studentRank  ;
switch (studentRank) {
    case 3:
       console.log("Congrats! You secured 3rd position")
        break;
    case 1:
        console.log("Congrats! You secured 1rd position")
        break;
        case 2:
           console.log("Congrats! You secured 2rd position")
           break;
        default:
            console.log("Sorry !")
            break;
}

function checkTime() {
    let get_date_and_time = new Date();
    console.log(get_date_and_time);
}

checkTime();
checkTime();
checkTime();
checkTime();
checkTime();

function getTaxSlab(salary: number) {
    let slab = '';
    if (salary >= 100000) {
        slab= '17%'
    }
    else if (salary >= 50000) {
        slab = '15%'
    }
    else {
        slab = '10%'
    }
    return slab; 
}

getTaxSlab(20000); 
getTaxSlab(200000); 
console.log('Your salary tax slab is : ', getTaxSlab(10000));

function addition(num1:number, num2:number) {
    console.log(num1 + num2);
}

addition(15, 10)

function recursiveFunc(count: number) { 
    console.log("CountDown :", count);
    if (count >= 0) {
    recursiveFunc(count - 1);
}
}
recursiveFunc(5);

let sampleArray = [1, 2, 3, 4, 5, 6, 10, 15, 25, 35, 1, 5, 80];
console.log(sampleArray.length);
sampleArray[0];
sampleArray[9];

let sampleArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sampleArray2.filter((c) => c % 2 == 0))

function test(c){
return c % 2 == 0
}

let subject: string[] = ["Ahmed", "Mustafa", "Bilal", "Mudasir", "Hasan"];
console.log(subject)
subject.push("Asad");
console.log(subject);

let legend: string[] = ["Ahmed", "Mustafa", "Bilal", "Mudasir", "Hasan"];
console.log(legend)
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

let a = {
    name: 'Muhammad Bilal',
    FatherName: 'Abdul Quddus',
    
}

let b = {
    name: 'Muhammad Mustafa',
    FatherName: 'Quddus Motiwala',
    age: '43'
}

a = b;
 
// Defining Types
interface Employee {
    employeeId: number;
    employeeName: string;
    salary: number;
}

// Variable Initialization
let collectionOfEmployee: Employee[] = [
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

let filterBySalary = collectionOfEmployee.filter((employee) => employee.salary >= 50000);

let filterByEmployeeId = collectionOfEmployee.filter((employee: Employee) => employee.employeeId == 3351);

let filterByEmployeeName = collectionOfEmployee.filter((employee: Employee) => employee.employeeName.includes("Bilal"));

// Loop

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for//of - loops through the values of an iterable object
// while - loops through a block of code while a specified
//condition is true
// do/while - also loops through a block of code while
//a specified condition is true

let student = ["Ahmed", "Raza", "Mannan", "Hadi"]
for (let i =0;  i <student.length; i++) {
    console.log(student[i]);
}

for (let i = 0; i < 3; i++) {
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

function funscope(){
}

setTimeout( () => {
    console.log(4)
}, 1000);
funscope ();

console.log("add water")
setTimeout(() => {
    console.log("tea is ready")
}, 5000)

console.log("add sugar")
setTimeout(() => {
    console.log("add tea lover")
}, 2000)

function abc(){
    console.log('Hello World')
}

function printConsole(cb:()=>void){
    cb()
}





