//Write a function called sortProduct that takes in (an array)
    //create an empty array to hold products
    //for each value in the array
        //create a variable that is assigned to the value of the array[at index] * array find index of that value
        //push the variable value into the empty array

    //return the sorted now not empty array in ascending order

const sortProduct = (array) => {
    let products = []
    for (let i in array)
        value = array[i] * i
        products.push(value)

    //return the sorted now not empty array in ascending order
    console.log(products)
}

sortProduct([23, 2, 3, 4, 5]);