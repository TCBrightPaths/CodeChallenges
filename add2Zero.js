let arr1 = [1, 4, 11, 2, 37, (-4)];
let arr2 = [0, 21, 33, 6, 0, (-9)];
let arr3 = [0, 1, 2, 3, 4, 5];
for (i = 0; i < arr3.length; i++) {
    for (j = i+1; j < arr3.length - 1; i++) {
        if ( arr3[i] + arr3[j] === 0) {
            console.log("true");
        }
    }
}
if(arr1[i] + arr1[2]!== 0) {
    console.log("false");
}