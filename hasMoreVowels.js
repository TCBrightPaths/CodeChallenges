//hasMoreVowels

const hasMoreVowels = (word) => {
    //let vowels = ["a", "e", "i", "o", "u"];
    //let alpha  = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let hasVowels = word.match(/['aeiou']/ig);
    let hasAlpha = word.match(/['bcdfghjklmnpqrstvwxyz']/ig);
    if(hasVowels.length > hasAlpha.length) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels('Aal'));

