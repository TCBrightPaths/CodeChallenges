
let newValue = new function(x=2,y=2)
    {
        if(x === y){
        console.log("The values are identical.");
    } else if (x > y) {
        console.log(x);
    } else if (x < y) {
    console.log(y);
    }
}
console.log(newValue);
