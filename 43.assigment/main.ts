// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


//this is original array

let Magicians:string[] = ["Harry Houdini" , "David Blaine", "Doug Henning" ,"Dai Vernon"]

// this function only creat copy from original array

function arrCopy(copyArray : string[]){

     return [...copyArray] ;
}

//this function for add The great words in copy array and console on terminal

function  make_great(MagiciansArray : string []) {

for(let i =0 ; i < MagiciansArray.length ; i++){
copyarrys[i] = "The Great " + MagiciansArray[i];
console.log(copyarrys[i])
}
}console.log("\n");

//function declaired show magicians name original 

function show_magicians(magicianName :string[]){
    
    for(let i=0 ; i< magicianName.length ; i++)
    console.log(`${magicianName[i]}` )

    console.log("\n");
}




//function value stored in variable
let copyarrys = arrCopy(Magicians)



console.log("Orignal Array");
show_magicians(Magicians)    //original arrays



console.log("Copy  Array With Modification");
make_great(copyarrys)        //modified + copy array