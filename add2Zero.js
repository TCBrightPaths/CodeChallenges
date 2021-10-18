let arr1 = [1, 4, 11, 2, 37, (-4)];
let arr2 = [0, 21, 33, 6, 0, (-9)];
let arr3 = [0, 1, 2, 3, 4, 5];
for (i = 0; i < arr1.length; i++) {
    for (j = i+1; j < arr1.length; i++) {
        if ( arr1[i] + arr1[j] === 0) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}