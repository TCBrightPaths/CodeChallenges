
let missingNumbers = (arr, maxNum) => {
    for(i=0; i<maxNum; i++) {
        if(!arr.includes(i+1)) {
            return i+1
        }
    }
}
console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7, 9, 10], 10));
