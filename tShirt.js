//Write a function that takes in a string with only the letters s, m, & l.
//The string is unsorted.
//Return a string that is sorted by s, m, then l.
//The string should always be lowercase, and contain no spaces.

//Write a function that takes one parameter.
    //Take out any white space.
    //Make sure the string is lowercase.
    //Sort the string by s, m, then l.
    //return a sorted string.

let tshirtSorter = str =>{
    str = str.trim();
    str = str.toLowerCase();
    str = str.split("");

    let sortedTShirts = str.sort().reverse().join("");
        
    console.log(sortedTShirts)
}
//tshirtSorter('lms')
tshirtSorter('smllms')