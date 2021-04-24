for (statement 1; statement 2; statement 3;) {

}


let (let i = 0; i <= 15; i++){
    if (i % 2 == 0) {
        alert('Even Number');
    }else{
        alert('Odd Number');
    }
}

//  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, 
// and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"



// EXERCISE 2.1: Write a JavaScript for loop that will go through the variable names

// if the item is not a string, go out of the loop.
// if the item is a string, display it.

// SOLUTION: 

let names= ["john", "sarah", 23, "Rudolf",34]

for (fname of names) {
    if (typepf fname == 'string') {
        console.log(fname);
    }
    console.log(fname);

}

for (index in names) {
    if (typeof fname[index] == 'index') {
        console.log(fname[index]);
    }

}










let names= ["john", "sarah", 23, "Rudolf",34]


//1. Write a JavaScript for loop that will go through the variable names.

//if the item is not a string, pass.
//if the item is a string, check if it's first letter is in uppercase. 
//If not, change it to uppercase and then display the name.