//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.//

function makeSandwiches(...item:string[]){
console.log("\nSandwich Order ")
item.forEach(Element =>{

console.log(`${Element}`);
})
console.log("Enjoy Your Sandwich");
}


makeSandwiches("cheese" , "meat" , "spinach")
makeSandwiches("Cream" , "chicken" , "capcicum")
makeSandwiches( "Butter", "Jelly")