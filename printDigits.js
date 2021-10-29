//Write a function called printDigits with one argument called num.
//Console log each digit in reverse
let printDigits = num =>{
    let mun = 0
    while(num > 0) {
        let digit = num % 10
        console.log(digit)
    }

}

printDigits(00);