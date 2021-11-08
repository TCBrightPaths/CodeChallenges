//Given an array, no less than three items in length, but with no max, and only integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer Number.
//Write a function that takes the array as an argument and returns this “outlier” N.

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
        console.log(evens)
    } else {
        console.log(odds)
    }
            
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])

//[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

//[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)