//Usually when you buy something or sign up for a new account, you’re asked for your credit card number, phone number, or answer to your most secret question. However, since someone could look over your shoulder, you don’t want that shown on your screen. Instead, we mask it.

//Write a function called maskify that takes in a (str)
    // changes string.length-4 into ‘#’.
    // for every letter in string up to string.length - 4
        //replace the letter at each index with '#'

    //console.log(result)

const maskify = (str) => {
    let result = []
    let substring1 = []
    let substring2 = []
    for ( i = 0; i < str.length-5; i++) {
        substring1.push('#')
    }
    for (i= str.length-4; i < str.length; i++) {
        substring2.push(str[i])
    }
    result = substring1 + substring2
    result = result.toString().replace(/','/g, '')
    console.log(result)
}

maskify("4556364607935616") //--> "############5616"