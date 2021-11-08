//Given an array, no less than three items in length, but with no max, and only integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer Number.
//Write a function that takes the array as an argument and returns this “outlier” N.

let ex1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let ex2 = [160, 3, 1719, 19, 11, 13, -21]
function findOutlier (array) { 
    let evens = []
    let odds = [] 
    for (let int in array) {
        if (array[int] % 2 === 0) {
            evens.push(array[int])
        } else { 
            odds.push(array[int])
        }
    }

    if (odds.length > evens.length) {
        return evens
    } else {
        return odds
    }
            
}

let outlier = findOutlier(ex2);

console.log(outlier);

