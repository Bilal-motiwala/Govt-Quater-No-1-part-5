//Class 1:

console.log('Hello World');


//Class 2 & 3:

//  1) Declare & Initialize:

let person='Bilal';
console.log(person);


// LET : (Declare one time & Initialize multiple time)

let king="Quddus";
king= "Mustafa";
console.log(king);

// CONST : (Declare one time & Initialize one time)

const pro='Ahmed';
console.log(pro);

// VAR : (Declare multiple time & Initialize multiple time)

var badshah='Mustafa';
var badshah='Quddus';
console.log(badshah);

// Legal & Illegal method :

let $king='Majeed';

let favoriteColor= 'Yellow';
console.log(favoriteColor);
favoriteColor='Red';
console.log(favoriteColor);

// storing Bilal in a variable
let Name : string = 'Muhammad Bilal'; // string
let age : number = 18 ; // Number
let isStudent : boolean = true ; //Boolean
let random : any = 18 ;

//strongly typed syntax
let a : string = "Pakistan";
let b : number = 10;
let c : boolean = true;

//type inference
let d = "Saudi Arabia";
let e = 11;
let f = false;

// Simple Calculator:

const num1 = 30 ;
const num2 = 50 ;
console.log("The Answer of Sum is :", num1+num2);
console.log("The Answer of Subtraction is :", num1-num2);
console.log("The Answer of Division is :", num1*num2);
console.log("The Answer of Multiplication is :", num1/num2);

//Class 4 & 5:

let firstname = 'Muhammad' ;
let lastname = 'Bilal' ;
let fullName = firstname+ '' +lastname ;
console.log(fullName)

let human = "Mustafa" ;
console.log("My Name is"+''+ human);

// "-----> Operators <-----" :

// 1) Arithmetic Operators:
// i.e : (+, -, *, /, %, **)

let Apple = 5;
console.log(Apple%2);

let Mango = 5**2;
console.log(Mango);

// 2) Unary Operators:
// -) increment (++i or i++)
// -) decrement (--i or i--)

let h = 12;
h++;
console.log(h);

let i = 12;
i--;
console.log(i);

// 3) Assigment Operators:
// i.e : (=, -=, +=, *=, /=, ...)

let j = 10;
j-= 10;
console.log(j);

let k = 10;
k+= 10;
console.log(k);

let l = 10;
l*= 10;
console.log(l);

let n = 10;
n/= 10;
console.log(n);

// 4) Comparison Operators:
// i.e : (==, ===, <, >, =<, >=, !=)

let o = 10;
let p = 11;
console.log(o == p);

let m = 10;
let v = 10;
console.log(m === v);

let r = 10;
let s = 10;
console.log(r < s);

let t = 9;
let x = 10;
console.log(t > x);

let y = 10;
 let E = 9;
console.log(y != E);

// Class 6

// 5) Logical Operators:
// i.e : { AND(&&), OR(||), NOT(!)}

let num3= 10 ;
let num4 = 20 ;
console.log(num3==num4 && num3<num4);

let num5= 10 ;
let num6 = 15 ;
console.log(num5!=num6 || num5<num6);

let num7= 10 ;
let num8 = 20 ;
console.log(!(num7<num8));

// Logic Statments:
// i.e : (If, Else If, Else)

let num9= 10 ;
let num10 = 20 ;
if (num9===num10){
    console.log("Both are equal");
}
else{
    console.log("Both are diferent");
}

let num11= 10 ;
let num12 = 20 ;
if (num11!=num12){
    console.log("Both are equal");
}
else{
    console.log("Both are diferent");
}

let num13= 10 ;
let num14 = 20 ;
let num15 = 5 ;
if (num13==num14){
    console.log("Both are equal");
}
else if (num13>num15){
       console.log("Num14 is greater");
}
else{
    console.log("Both are diferent");
}

let isRaining = true;
if (isRaining) {
    console.log("Wear a raincoat.");
} else {
    console.log("Wear sunglasses.");
}

// Class 7 & 8

// If-Else Statement:

let people = "Bilal";

if (people==="Bilal"){
    console.log("A Good Teacher")
}

else {
    console.log("Not a Good Teacher");
}

// Ternary Operators :
// Condition ? Message : Message
// ? ---> IF
// : ---> Else

let persons = "Muhammad";

persons==="Bilal"? console.log("A Good Teacher"):  console.log("Not a Good Teacher")

// Switch

let Devices = "Tube-Light";

switch (Devices){

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

let isHungry = true;
let Snack = isHungry ? "Banana" : "Shake";
console.log(`You should have some ${Snack}.`);

let guess: number = 7;
let target: number = 5;
if(guess<target){
    console.log("Your guess is too Low.");
}else if (guess<target){
    console.log("Your guess is too High.");
}else {
    console.log("Your guessed correctly!");
}

// Friend Checker Game:

let isFriend: string = "Muhammad";
if (isFriend==="Muhammad" || isFriend === "Mustafa"){
    console.log(`${isFriend} is your friend.`);
} else {
    console.log(`${isFriend} is not your friend.`);
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

function sum(){
    let num1 = 15;
    let num2 = 20; 
    let x = num1+num2 ;
    console.log(x);
}

sum();

function Bio(Name:string= "Bilal" , Age:number=18 , Profession:string="Student"){
    console.log(`My name is ${Name}`);
    console.log(`My age is ${age}`);
    console.log(`I am a ${Profession}`);
}

Bio();

//Return function.

function suppose(num3, num4){

    let y= num3+num4;
    return y;

}

console.log(suppose(20,15));

//Arrow function.

let supp=(num3, num4)=>{

    let y= num3+num4;
    return y;

}

let z= supp(15,15); 
console.log(z);

// Class 10 & 11:

type T_type= {
    name:string,
    exp:number,

};

 type S_type= {
     name:string,
     rollno:number,

 };

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

let both: T_type&S_type = {
    name: "Muhammad",
    exp:5,
    rollno:3351,
}

// Class 12 13 & 14:

// Methods of An Array;

let Test =[`Muhammad`,`Bilal`];

// 1) POP:
Test.pop()
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
console.log(Test.slice())

// 6) Splice: (pop, push, shift, unshift)
Test.slice(1,1);
console.log(Test);

// 7) Lenght:
console.log(Test.length)

// Tuple;

let Marks: [number]= [3351]

// Class 15 :

let a = 54;
console.log(a.toFixed(2))

// Math random:

let A = Math.random()
console.log(A)