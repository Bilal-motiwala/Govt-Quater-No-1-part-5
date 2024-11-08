"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let Magicians = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function make_great(MagiciansArray) {
    for (let i = 0; i < MagiciansArray.length; i++) {
        Magicians[i] = "The Great " + MagiciansArray[i];
    }
}
function show_magicians(magicianName) {
    for (let i = 0; i < magicianName.length; i++)
        console.log(magicianName[i]);
}
make_great(Magicians); //modified
show_magicians(Magicians); //old 
