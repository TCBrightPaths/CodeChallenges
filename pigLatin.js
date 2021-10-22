function sent (str, fn) {
    let sentArr = str.split(" ");
    fn(sentArr);
    
}
function pigLatin (word) {
    let newWord = word.split("");
    let vowels = ["a", "e", "i", "o","u"];
    for(let letter in word) {
        if(vowels.includes(newWord[0])) {
            newWord.shift();
            newWord.push("yay")
        } else {
            newWord.shift();
            newWord.push("ay");
        }
    }
    console.log(newWord);   
}
pigLatin("porcupine");
// sent("porcupines are cute", function (arr) {
//     for(let x in arr)  {
//         arr[x].unshift(x[0]);
//         arr[x].push(x[x.length-1]+"ay");
//     }
// });