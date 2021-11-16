//Write a function given one parameter (wishlist, presents)
    //return the wishlist object name whose attributes match the attributes from presents

function guessGifts (wishlist, presents) {
    let guesses = []
    for(i = 0; i < presents.length; i++){
        let item = presents[i]
        if(wishlist[item]) {
            guesses.push(item.name)
        }
    }
}