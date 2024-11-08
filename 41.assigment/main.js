"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let Magicians = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function show_magicians(magicianName) {
    for (let i = 0; i < magicianName.length; i++) //for loop  
        console.log(magicianName[i]);
    //     magicianName.forEach(element => {                   //for each loop
    // console.log(element);
    //  });
}
show_magicians(Magicians);
