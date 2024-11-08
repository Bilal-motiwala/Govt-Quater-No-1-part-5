Pratice Test 


// let UserId: string | number = 12345

// // UserId = "giaic890"










// type StudentType = string | number

// let StudentId : StudentType = "12345"

// StudentId = 1234

// function testingNarrowing(
//     params: string | number
// ) {
//     if (typeof params == "number") {
//         return Math.round(params)
//     }
//     if (typeof params == "string") {
//         return params.toUpperCase()
//     }
// }

type TeacherNametype = "Hina" | "Anas" | "fahad" | "Ahmed" | 2

let teacherNames : TeacherNametype = "Hina"
if (typeof teacherNames == "string") {
    if (teacherNames == "Hina") {
        console.log("Teacher name is hina")
    } else if (teacherNames == "Anas") {
        console.log("this is anas")
}
else {
     console.log("Teacher name is 2")
}
}

for (let i = 0 ; i < 10 ; i++) {
    console.log("Today is Sunday")
}

let i:number = 2;
while (i< 4) {
    console.log("Block statementexecution no." + i)
    i++;
}


 For Loop
 let arrayData =[10,20,30,40,50];
 for (let a = 0; a < arrayData.length; a++) {
        console.log(a)
    }

For Of 
for(let element of arrayData) {
    console.log(element);
}

// //For In 
for(let element3 in arrayData) {
    console.log(element3);
}

let arrayData: any = {
    name: "Fahad",
    class: "9 to 5",
};


let bt = 10
while (bt < 10) {
    console.log(bt);
}

let step = 0;
while (step < 10) {
    console.log("Abdullah Moving Towards Gates");
    console.log(step);
    step = step + 1;
}

let steps: number = 4;
do {
    console.log("Block Statement execution no." + steps);
} while (steps < 4);

let studentToLeave = { "Abdullah", "Ahmed", "Hamza", "Ali", "Mustafa"};

 for (let index= 0; index < studentToLeave.length; index++) {
    if (studentToLeave[index]=="Abdullah"){
        console.log("Abdullah Run");
        break;
    } else {
        console.log(studentToLeave[index]);
        console.log("Allah Hafiz");
        continue;
    }
}

enum Role {
    Student_Role = 2796,
    Admin_Role = 796,
}

if (roleId == 796) {
    console.log("Provide Access For Student");
    unsubscribe();
    
}