//find the smallest difference (subtraction) between any two nums.


let arr1 = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]

//Write a function that determines the smallest difference between any pair of numbers in both lists. 
    //Find largest element in first array
    //Find the smallest element in the second array
    //Subtract smallest from largest
    //return difference

const smallestDifference = (arr1, arr2) => {
    let largest = Math.max(...arr1)
    let smallest = Math.min(...arr2)
    let difference = smallest - largest
    console.log(difference)
}

smallestDifference(arr1, arr2)