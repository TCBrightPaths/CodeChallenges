function findLuckyNumbers(n) {
    let newArray = [];
    let result = Math.floor(Math.random() * 10 + 1);
    for(i=0;i<n;i++) {
        if(newArray.includes(result) !== false) {
        newArray.push(result);
        } else {
        newArray.push("");
        }
        console.log(newArray);
    }
}
findLuckyNumbers(8);