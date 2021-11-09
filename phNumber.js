//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber (array) {
    
    array.unshift('(')
    array.splice(4, 0, ') ') //add ') ' after position 2
    array.splice(8, 0, '-')  //add '-' after position 5  
    let ph = array.join(" ") //return a string out of the array
    console.log(ph)
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 

// => returns "(123) 456-7890"