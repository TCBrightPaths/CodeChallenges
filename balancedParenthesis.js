//Write a function that takes in a string including paretheses. 
//Determine whether or not the string has parentheses.
//Determine whether or not the string has both sets of parentheses.
//For every open parentheses, is there a closing parentheses?
//Return true or false. 

//Write a function that takes one paremeter: (str)
    //let a variable hold the values of the open and closed parenthesis
    //If the string can be divided by two with a remainder of zero &&& matches all of the parentheses in my variable
        //Return true
    //Otherwise, if both conditions are not true...
        //return false


const has_balanced_parens = (str) => {
    str = str.split("")
    let stck = []
    str.forEach(element => {
        if (element === '(') {
            stck.push(element);
        } else if (element === ')') {
            stck.pop();
        }
    if(stck.length != 0) {
        console.log(false);
    } else {
        console.log(true);
    }
    });
    
}


has_balanced_parens("(Oh Noes!)()")