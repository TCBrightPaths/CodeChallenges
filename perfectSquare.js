// Write a function called perfectSquare that takes a (number that's perfect square) 
    //confirm it's an integer
    //use sqrt function 
    //find the next perfect square after the one passed in
    
    //console.log(nextPerfectSquare)

const perfectSquare = (num) => {
    let nextPerfectSquare = Math.floor(Math.sqrt(num) + 1)
    console.log(nextPerfectSquare * nextPerfectSquare);
}


perfectSquare(16) // should return 16 (3x3=9, 4x4=16)