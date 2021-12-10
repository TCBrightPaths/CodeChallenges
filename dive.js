//horizontal position starts at 0
//depth starts at 0
//let num control increment
//forward increments horizontal position
//up decrements depth
//down increments depth
//product equals position times depth
//write a function that takes in (a direction, a value)
    //if direction equals forward
        //add to horizonal position by value
        //return hposition
    //if direction equals up
        //decrement depth by value
        //return depth
    //if direction equals down
        //increment depth by value
        //return depth
    //if any other direction
        //log that is not a valid move
    //let depth equal the new value
//write another function that takes in an (object array)
    //calls above function on each value

let hposition = 0
let depth = 0
const dive = (dir, num) => {
    switch(dir) {
        case 'forward':
            hposition += num
            break;
        case 'up':
            depth -= num
            break;
        case 'down':
            depth += num
            break;
        default:
            console.log('That is not a valid direction.')
            break;
    }
    return hposition * depth
} 

const finalDepth = () => {
    
}
    