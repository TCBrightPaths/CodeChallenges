let fs = require("fs");

let nums = () => {
    try {
        let data = fs.readFileSync("./sonarSweep.txt", "utf8")
        data = data.split("")
        let increasedVals = []
        for (i = 0; i < data.length - 1; i++) {
            if(data[i] < data[i+1]) {
                increasedVals.push(data[i+1])
            }
        }
        console.log(increasedVals.length)
    } catch(err) {
        console.log('ERROR:', err)
    }
}

nums();
let arr1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

//Write a function that takes in an (array)
    //create a new array to hold the increased values
    //for each number in the array
        //if next number is larger than previous number
            //push value to new array
    //return the number of measurments that are larger than the previous measurment

const sonarSweep = (arr) => {
    let increasedVals = []
    for (i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i+1]) {
            increasedVals.push(arr[i+1])
        }
    }
    console.log(increasedVals.length)
}

//sonarSweep(arr1)