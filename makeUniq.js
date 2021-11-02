//I'm going to be passed a string within which some of the letters will be the same.
//All of the letters will be lowercase.
//The string will contain only letters from a-z in the alphabet.
//There will be not spaces.
//The function should spit out the string minus the duplicate letters.

//Write a function which takes one parameter, a string.
    //Split my string into an array that I can loop through.
    //then I'll create a new array that is empty to hold unique values.
    //for each item in my original array, 
        //if my new array does not include that item, then I'll push it into my new array. 
    //join my new array back into a string. 
    //return the string - duplicate letters. 

let makeUniq = (str) => {
    let array = str.split("");
    let filteredArr = [];
    for (let item in array) {
        if(!filteredArr.includes(array[item])) {
            filteredArr.push(array[item]);
        }
    }
    filteredArr = filteredArr.join("")
    console.log(filteredArr);
}

makeUniq('helloworld')